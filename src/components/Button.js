import React from "react"
import { StyledButton } from "../styles/components/Button.styles"

export const Button = ({text}) => <StyledButton>{text}</StyledButton>

Button.defaultProps = {
  text: 'Add to cart'
}