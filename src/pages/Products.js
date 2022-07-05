import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledProducts } from '../styles/pages/Products.styles'
import { Product } from '../components/Product'
import { fetchProducts } from '../store/products'

export const Products = () => {
  const products = useSelector(({products}) => products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const renderProducts = () => products.map(product => <Product product={product} key={product.id} />)

  return (
    <StyledProducts>
      {products.length === 0 && <div>Loading...</div>}
      {products.length > 0 && (renderProducts())}
    </StyledProducts>
  )
}
