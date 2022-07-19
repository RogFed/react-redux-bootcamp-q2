import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ecommercePostOrderPromise } from "../../api";

export const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(postOrder.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(postOrder.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
    .addCase(postOrder.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.items.push(action.payload)
      action.meta.arg.push('/order')
    })
  }
})

export const postOrder = createAsyncThunk('orders/postOrder', ecommercePostOrderPromise)

export const selectLastOrder = ({orders: {items}}) => items[items.length - 1] 

export const ordersReducer = ordersSlice.reducer