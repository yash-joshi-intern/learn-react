import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart : []
    //we can have multiple here realted to the carts for this cart slice
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        addToCart : (state, action) => {
            const product = action.payload
            const exists = state.cart.find(p => p.id === product.id)

            if(exists){
                exists.qty += 1
            }else {
                state.cart.push({...product , qty:1})
            }
        },
        removeFromCart : (state, action) => {
            state.cart = state.cart.filter(p => p.id !== action.payload)
        },
    },
})


export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer
