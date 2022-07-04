import React from "react"

import { StyledProduct, StyledFeaturedImage, StyledProductInformation, StyledProductInformationGroup } from "../styles/components/Product.styles"
import { Button } from "./Button"

export const Product = ({product}) => {
  const {images, name, categories, price} = product 
  
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
        <Button />
      </StyledProductInformation>
    </StyledProduct>
  )
}