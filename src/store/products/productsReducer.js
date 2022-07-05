import { FETCH_PRODUCTS_SUCCESS } from './'

const initialState = []

export const productsReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case FETCH_PRODUCTS_SUCCESS:
      return [...payload]
    default:
      return state
  }
}