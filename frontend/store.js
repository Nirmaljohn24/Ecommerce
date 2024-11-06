import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./src/slices/apiSlice";
import  cartSliceReducer  from "./src/slices/cartSlice"


const store = configureStore({
   reducer:{
      [apiSlice.reducerPath]: apiSlice.reducer,
      cart: cartSliceReducer
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store;