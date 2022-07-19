import React from "react"
import { StyledButton } from "../styles/components/Button.styles"

export const Button = ({children, type, clickHandler, isDisabled}) => <StyledButton type={type} onClick={clickHandler} disabled={isDisabled}>{children}</StyledButton>

Button.defaultProps = {
  text: 'Add to cart',
  type: 'button',
  onClick: () => {},
  isDisabled: false
}