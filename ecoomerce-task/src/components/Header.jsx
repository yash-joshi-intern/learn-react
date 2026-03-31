import { useCart } from "../context/CartContext";

function Header() {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, p) => acc + p.qty, 0);

  return (
    <div>
      <h1>Product Explorer</h1>
      <button>🛒 Cart ({totalItems})</button>
    </div>
  );
}

export default Header;