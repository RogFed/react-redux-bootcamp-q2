export const ADD_TO_CART = 'ADD_TO_CART'
export const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addToCart = product => ({
  type: ADD_TO_CART,
  payload: product
})

export const updateQuantity = data => ({
  type: UPDATE_PRODUCT_QUANTITY,
  payload: data
})

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: id
})