import React from "react"
import { StyledButton } from "../styles/components/Button.styles"

export const Button = ({children, type, clickHandler}) => <StyledButton type={type} onClick={clickHandler}>{children}</StyledButton>

Button.defaultProps = {
  text: 'Add to cart',
  type: 'button',
  onClick: () => {}
}