import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ecommerceGetProductsApiPromise } from "../../api";

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.items = state.items.concat(action.payload.items)
    })
  }
})

export const selectAllProdcuts = ({products: {items}}) => items

export const fetchProducts = createAsyncThunk('products/fetchProducts', ecommerceGetProductsApiPromise)

export const productsReducer = productsSlice.reducer 