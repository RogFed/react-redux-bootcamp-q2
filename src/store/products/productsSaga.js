import { call, put, takeEvery } from "redux-saga/effects";
import { FETCH_PRODUCTS_REQUESTED, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR } from './index'

export function* watchProductsSaga(){
  yield takeEvery(FETCH_PRODUCTS_REQUESTED, fetchProducts)
}

export function* fetchProducts(){
  try {
    const products = yield call(requestProducts)
    yield put({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: products
    })
  } catch(e){
    yield put({
      type: FETCH_PRODUCTS_ERROR,
      payload: 'Error fetching products. Try again later.'
    })
  }
}

const requestProducts = async () => {
  const response = await fetch('/data/products.json')
  const {data: {products: {items}}} = await response.json()
  return items
}