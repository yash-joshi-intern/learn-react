import React, { createContext, useContext, useState } from 'react'

export const CartContext = createContext();

export function useCart() {
    return useContext(CartContext)
}


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    function addToCart(product) {
        setCart(prev => {
            const exists = prev.find( p => p.id === product.id)

            if(exists) {
                return prev.map(
                    (p) => {
                        if(p.id === product.id){
                            return {...p, qty : p.qty + 1}
                        }
                        return p
                    }
                )
            }

            return [...prev , {...product, qty: 1}]
        })
    }

    function removeFromCart(id){
        setCart(prev => prev.filter(p => p.id !== id))
    }

  return (
    <CartContext.Provider value = {{cart, addToCart, removeFromCart}}>
        {children}
    </CartContext.Provider>
  )
}
