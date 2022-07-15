import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postOrder } from "../orders/ordersSlice";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {
    addToCart({items}, {payload}) {
      const itemFound = items.find(item => item.id === payload.id)

      if(items.length === 0 || !itemFound) {
        items.push({...payload, quantity: 1})
        return
      }

      itemFound.quantity += 1
      items.concat(payload)
    },
    
    updateQuantity({items}, {payload}) {
      const itemToUpdate = items.find(item => item.id === payload.id)
      itemToUpdate.quantity = payload.quantity
    },

    removeFromCart({items}, {payload}) {
      const indexToRemove = items.findIndex(item => item.id === payload)
      items.splice(indexToRemove, 1)
    }
  },
  extraReducers(builder) {
    builder.addCase(triggerPostOrder.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(triggerPostOrder.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
    .addCase(triggerPostOrder.fulfilled, (state, action) => {
      state.status = 'succeeded'
    })
  }
})

export const selectAllFromCart = ({cart: {items}}) => items

export const totalItemsInCart = ({cart: {items}}) => items.reduce((prevValue, currValue) => (prevValue) + (currValue.quantity), 0)

export const getTotalCost = ({cart: {items}}) => items.reduce((prevValue, currValue) => (prevValue) + (currValue.quantity * currValue.price), 0)

export const triggerPostOrder = createAsyncThunk('cart/postOrder', (history, {dispatch}) => dispatch(postOrder(history)))

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions

export const cartReducer = cartSlice.reducer