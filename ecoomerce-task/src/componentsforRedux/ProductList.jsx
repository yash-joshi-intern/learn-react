import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice"

function ProductList({ products }) {
  const dispatch = useDispatch();

  return (
    <div>
      {products && products.map(p => (
        <div key={p.id}>
          <img src={p.thumbnail} width="100" />
          <h4>{p.title}</h4>
          <p>{p.price}</p>

          <button onClick={() => dispatch(addToCart(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;