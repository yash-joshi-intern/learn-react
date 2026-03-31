import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts, setPage, setSearch,setSort,setCategory,setCategories,
} from "./redux/productSlice";

import ProductList from "./componentsforRedux/ProductList";
import Cart from "./componentsforRedux/Cart";
import Header from "./componentsforRedux/Header";

const LIMIT = 10;

function One() {
  const dispatch = useDispatch();

  const {
    products,
    page,
    total,
    search,
    sort,
    category,
    categories,
  } = useSelector(state => state.products);

  {console.log(products,
    page,
    total,
    search,
    sort,
    category,
    categories,)}

  const totalPages = Math.ceil(total / LIMIT);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category-list")
      .then(res => res.json())
      .then(data => dispatch(setCategories(data)));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, page, search, sort, category]);

  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <Cart />

        <div>
          <input
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />

          <select onChange={(e) => dispatch(setCategory(e.target.value))}>
            <option value="all">All</option>
            {categories.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          <select onChange={(e) => dispatch(setSort(e.target.value))}>
            <option value="">Default</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
            
          <ProductList products={products} />

          <button onClick={() => dispatch(setPage(page - 1))} disabled={page === 1}>
            Prev
          </button>

          <span> Page {page} / {totalPages} </span>

          <button onClick={() => dispatch(setPage(page + 1))} disabled={page === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default One;