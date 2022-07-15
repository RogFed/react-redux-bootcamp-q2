import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledProducts } from '../styles/pages/Products.styles'
import { Product } from '../components/Product'
import { selectAllProdcuts, fetchProducts } from '../store/products'

export const Products = () => {
  const products = useSelector(selectAllProdcuts)
  debugger
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const renderProducts = () => products.map(product => <Product product={product} key={product.id} />)

  return (
    <StyledProducts>
      {!products && <div>Error loading products.</div>}
      {products && products.length === 0 && <div>Loading...</div>}
      {products && products.length > 0 && (renderProducts())}
    </StyledProducts>
  )
}
