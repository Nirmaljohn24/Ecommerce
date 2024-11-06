import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {
  // Try to get the cart from local storage
  const cart = localStorage.getItem("cart");
  try {
    // Parse the cart from JSON and ensure it has a cartItem array
    const parsedCart = cart ? JSON.parse(cart) : null;
    return parsedCart && Array.isArray(parsedCart.cartItem)
      ? parsedCart
      : { cartItem: [] }; // Default to an object with an empty array
  } catch (error) {
    console.error("Failed to parse cart from localStorage:", error);
    return { cartItem: [] }; // Fallback to empty array if parsing fails
  }
})();



const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      // console.log(item);

      // Check if the cartItem is defined and an array
      if (!state.cartItem || !Array.isArray(state.cartItem)) {
        console.error("cartItem is not defined or is not an array:", state.cartItem);
        state.cartItem = []; // Reset to an empty array if something is wrong
      }

      const existItem = state.cartItem.find((a) => a._id === item._id);
      // console.log(existItem);

      // console.log(state.cartItem);

      if (existItem) {
        state.cartItem = state.cartItem.map((a) => a._id === existItem._id ? item : a);
      } else {
        state.cartItem = [...state.cartItem, item]
      }

      // console.log(state.cartItem);

      //Calculate Item Price

      state.itemsPrice = state.cartItem.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(0)

      //Shipping Price (If More than Rs.100 FREE!)

      state.shippingPrice = state.itemsPrice > 100 ? 0 : 20;

      //GST Price

      state.taxPrice = Number(0.18 * state.itemsPrice);

      //Total Price

      state.totalPrice = (
        Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)
      );

      



      localStorage.setItem("cart", JSON.stringify(state));

    },
    removeFromCart:(state,action) =>{
      state.cartItem = state.cartItem.filter((x) => x._id !== action.payload);

     

       //Calculate Item Price

       state.itemsPrice = state.cartItem.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(0)

       //Shipping Price (If More than Rs.100 FREE!)
 
       state.shippingPrice = state.itemsPrice > 100 ? 0 : 20;
 
       //GST Price
 
       state.taxPrice = Number(0.18 * state.itemsPrice);
 
       //Total Price
 
       state.totalPrice = (
         Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)
       );
 
       
 
 
 
       localStorage.setItem("cart", JSON.stringify(state));
    }
  }
});

// Export actions and reducer
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
