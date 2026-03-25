import { useEffect, useState } from "react"

function App() {

  const [product, setProducts] = useState([]);
  const [search , setSearch] = useState("");

  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all")

  const [sort, setSort] = useState("");

  const [page, setPage] = useState(1)

  const start = (page - 1) * 10;
  const end = start + 10;

  const paginatedProduct = product.slice(start,end) //updated product have to render this in the rendering
  const totalPages = Math.ceil(product.length / 10)


  function sortProduct(products, sort) {
    let sorted = [...products];

    if(sort === "price-asc"){
      sorted.sort((a,b) => a.price - b.price)
    }else if(sort === "price-desc"){
      sorted.sort((a, b) => b.price - a.price)
    }
    return sorted
  }

  useEffect(() => {
    async function fetchCatetory() {
      const res = await fetch("https://dummyjson.com/products/category-list")
      const data = await res.json();

      setCategories(data)
    }

    fetchCatetory()
  },[])

  useEffect(()=>{
    async function fetchProduct() {
      let url = ""

      // const url = search 
      //     ? `https://dummyjson.com/products/search?q=${search}`
      //     : `https://dummyjson.com/products?limit=10`

      if(search){
        url = `https://dummyjson.com/products/search?q=${search}`
      }else if(category != "all"){
         url = `https://dummyjson.com/products/category/${category}`;
      }else{
        url = `https://dummyjson.com/products`;
      }

      const res = await fetch(url);
      const data = await res.json();
      console.log(data)

      let result = data.products

      if(search && category != "all"){
        result = result.filter((e)=> e.category === category)
      }

      result = sortProduct(result, sort)

      console.log(result)
      setProducts(result)
    }

    fetchProduct()
  },[search,category,sort])

  return(
    <div>
      <h1>Products Listing</h1>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e)=> {
          setSearch(e.target.value)
          setPage(1)
        }}
      />

      <select 
        value={category}
        onChange={(e) => {
          setCategory(e.target.value)
          setPage(1)
        }}
      >
        <option value="all">All</option>
        {
          categories && categories.map((cat) => (
            <option key={cat} value={cat} >{cat}</option>
          ))
        }
      </select>

      <select value={sort} onChange={(e) => {
        setSort(e.target.value)
        setPage(1)
      }}>
        <option value=""> Default </option>
        <option value="price-asc"> Price Low → High </option>
        <option value="price-desc"> Price High → Low </option>
      </select>

      {paginatedProduct && paginatedProduct.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p> Category : {p.category}</p>
          <p>Price: {p.price}</p>
        </div>
      ))}

      <button
        onClick={() => setPage((p)=> p - 1)}
        disabled={page===1}
      >
        Prev
      </button>

      <button
        onClick={() => setPage((p)=> p + 1)}
        disabled={page===totalPages}
      >
        Next
      </button>
    </div>
  )

}

export default App
