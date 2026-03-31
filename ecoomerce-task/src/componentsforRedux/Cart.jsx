import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

function Cart() {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 && <p>Empty</p>}

      {cart.map(p => (
        <div key={p.id}>
          <p>{p.title} (x{p.qty})</p>
          <button onClick={() => dispatch(removeFromCart(p.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;