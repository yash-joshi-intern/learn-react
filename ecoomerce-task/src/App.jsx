import { useEffect, useState } from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

const LIMIT = 10;

function App() {
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0) //pagination formula skip = (page - 1) * LIMIT

  const totalPages = Math.ceil(total/LIMIT);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("")

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(()=> {
    fetch("https://dummyjson.com/products/category-list")
      .then(res => res.json())
      .then(data => setCategories(data))
  },[])

  useEffect(() => {
    async function fetchProducts() {

      const skip = (page-1)*LIMIT

      const sortParam = sort ? `&sortBy=price&order=${sort}` : ""

      let url;

      if (search && category !== "all") {
        url = `https://dummyjson.com/products/category/${category}?limit=0${sortParam}`;
      } else if (search) {
        url = `https://dummyjson.com/products/search?q=${search}&limit=${LIMIT}&skip=${skip}${sortParam}`;
      } else if (category !== "all") {
        url = `https://dummyjson.com/products/category/${category}?limit=${LIMIT}&skip=${skip}${sortParam}`;
      } else {
        url = `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}${sortParam}`;
      }

      const res = await fetch(url)
      const data = await res.json()

      let result = data.products

      if ( search && category != "all"){
        result = result.filter( prod => prod.title.toLowerCase().includes(search.toLowerCase()));
        setTotal(result.length)
        setProducts(result.slice(skip, skip + LIMIT))
      }else{
        setTotal(data.total)
        setProducts(result)
      }
    }

    fetchProducts();
  }, [page,search, sort , category]);

  return (
    <CartProvider>
      <Header />
      <div style={{ display: "flex" }}>


        <Cart />
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />

          <select value={category} onChange={(e) => { setCategory(e.target.value); setPage(1); }}>
            <option value="all">All</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <select value={sort} onChange={(e) => { setSort(e.target.value); setPage(1); }}>
            <option value="">Default</option>
            <option value="asc">Price: Low - High</option>
            <option value="desc">Price: High - Low</option>
          </select>

          <ProductList products={products} />

          <button onClick={() => setPage(p => p - 1)} disabled={page === 1}>Prev</button>
          <span> Page {page} / {totalPages} </span>
          <button onClick={() => setPage(p => p + 1)} disabled={page === totalPages}>Next</button>
        </div>

      </div>
    </CartProvider>
  );
}

export default App;