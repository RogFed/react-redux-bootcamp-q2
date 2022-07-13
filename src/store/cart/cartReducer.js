import { ADD_TO_CART } from "./index"

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
    default:
      return state
  }
}