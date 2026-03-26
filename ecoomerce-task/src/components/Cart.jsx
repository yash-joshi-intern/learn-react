import { useCart } from "../context/CartContext";

function Cart(){
    const {cart, removeFromCart } = useCart()

    return (
        <div>
            <h2>Cart </h2>

            {cart.length === 0 && <p>Empty Cart</p>}
            {cart.map(p => (
                <div key={p.id}>
                    <p> {p.title} Quantity : {p.qty}</p>
                    <button onClick={() => removeFromCart(p.id)}> Remove</button>
                </div>
            ))}

        </div>
    )
}

export default Cart;