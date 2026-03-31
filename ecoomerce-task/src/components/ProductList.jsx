import { useCart } from "../context/CartContext";

function ProductList({ products }) {
  const { addToCart } = useCart();

  return (
    <div>
      {products.map(p => (
        <div key={p.id}>
          <img src={p.thumbnail} alt={p.title} width="100" />
          <h4>{p.title}</h4>
          <p>Category : {p.category} | Price : {p.price} | Rating : {p.rating} | Stock: {p.stock}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;