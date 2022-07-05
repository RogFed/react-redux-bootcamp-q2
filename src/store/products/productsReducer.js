import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from './'

const initialState = []

export const productsReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case FETCH_PRODUCTS_SUCCESS:
      return [...payload]
    case FETCH_PRODUCTS_ERROR:
      return null
    default:
      return state
  }
}