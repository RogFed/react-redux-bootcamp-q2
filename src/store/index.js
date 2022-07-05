import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import { productsReducer as products } from './products'

const rootReducer = combineReducers({
  products
})

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))