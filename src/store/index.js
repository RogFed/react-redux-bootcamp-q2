import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import createSagaMiddleware from 'redux-saga'
import { productsReducer as products } from './products'
import { rootSaga } from './rootSaga'

const rootReducer = combineReducers({
  products
})

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(rootSaga)