import React from "react"
import { useDispatch } from "react-redux"
import { StyledProduct, StyledFeaturedImage, StyledProductInformation, StyledProductInformationGroup } from "../styles/components/Product.styles"
import { Button } from "./Button"
import { addToCart } from "../store/cart"

export const Product = ({product}) => {
  const {images, name, categories, price} = product 
  const dispatch = useDispatch()

  const onAddToCart = () => {
    dispatch(addToCart(product))
  }
  
  return (
    <StyledProduct>
      <StyledFeaturedImage>
        <img src={images[0]} alt={name} /> 
      </StyledFeaturedImage>
      <StyledProductInformation>
        <StyledProductInformationGroup>
          <h2>{name}</h2>
          <p>{categories[0]}</p>
        </StyledProductInformationGroup>
        <p>{price}</p>
        <Button clickHandler={onAddToCart}>Add to cart</Button>
      </StyledProductInformation>
    </StyledProduct>
  )
}