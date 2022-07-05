export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODCTS_SUCCESS'

export const fetchProducts = () => async dispatch => {
  const response = await fetch('/data/products.json')
  const {data: {products: {items}}} = await response.json()
  dispatch({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: items
  })
}