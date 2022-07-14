import { ADD_TO_CART, UPDATE_PRODUCT_QUANTITY, REMOVE_FROM_CART } from "./index"

const initialState = []

export const cartReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case ADD_TO_CART:
      const itemFound = state.find(item => item.id === payload.id)

      if(state.length === 0 || !itemFound) {
        payload.quantity = 1
        return [...state, payload]
      }

      itemFound.quantity += 1
      return [...state]
    
    case UPDATE_PRODUCT_QUANTITY:
      const itemToUpdate = state.find(item => item.id === payload.id)
      itemToUpdate.quantity = payload.quantity
      return [...state]

    case REMOVE_FROM_CART:
      const filteredItems = state.filter(item => item.id !== payload)
      return [...filteredItems]

    default:
      return state
  }
}