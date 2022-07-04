import React, {useEffect, useState} from 'react'

import { StyledProducts } from '../styles/pages/Products.styles'
import { Product } from '../components/Product'

export const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('/data/products.json').then(res => res.json()).then(({data: {products: {items}}}) => setProducts(items))
  }, [])

  const renderProducts = () => products.map(product => <Product product={product} key={product.id} />)

  return (
    <StyledProducts>
      {products.length === 0 && <div>Loading...</div>}
      {products.length > 0 && (renderProducts())}
    </StyledProducts>
  )
}
