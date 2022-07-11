import React from "react"
import { StyledButton } from "../styles/components/Button.styles"

export const Button = ({children, type}) => <StyledButton type={type}>{children}</StyledButton>

Button.defaultProps = {
  text: 'Add to cart',
  type: 'button'
}