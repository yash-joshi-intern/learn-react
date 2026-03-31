import { useSelector } from "react-redux";

function Header() {
  const cart = useSelector(state => state.cart.cart);

  const totalItems = cart.reduce((acc, p) => acc + p.qty, 0);

  return (
    <div>
      <h1>Product Explorer</h1>
      <button>🛒 ({totalItems})</button>
    </div>
  );
}

export default Header;