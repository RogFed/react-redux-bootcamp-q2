import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products";
import { cartReducer } from "./cart"
import { userReducer } from "./user";
import { ordersReducer } from './orders'

export default configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer
  }
})