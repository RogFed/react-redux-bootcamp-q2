import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledProducts, StyledProductsGrid } from '../styles/pages/Products.styles'
import { Product } from '../components/Product'
import { selectAllProdcuts, fetchProducts } from '../store/products'
import { SearchBar } from '../components/SearchBar'

export const Products = () => {
  const allProducts = useSelector(selectAllProdcuts)
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState(undefined)
  const [products, setProducts] = useState(allProducts)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    setProducts(allProducts)
  }, [allProducts])

  useEffect(() => {
    if (!searchTerm) return;

    const filteredProducts = allProducts.filter(({name, description}) => name.toLowerCase().includes(searchTerm) || description.toLowerCase().includes(searchTerm))

    setProducts(filteredProducts)
  }, [searchTerm, allProducts])

  const renderProducts = () => products.map(
    product => <Product product={product} key={product.id} />
  )

  return (
    <StyledProducts>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <StyledProductsGrid>
        {!allProducts && <div>Error loading products.</div>}
        {allProducts && allProducts.length === 0 && <div>Loading...</div>}
        {products && products.length > 0 && (renderProducts())}
      </StyledProductsGrid>
    </StyledProducts>
  )
}
