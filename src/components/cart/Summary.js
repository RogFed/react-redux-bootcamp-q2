import React from "react"
import { Button } from "../Button"
import { useFormatCurrency } from "../../hooks"
import { StyledSummary } from "../../styles/components/cart/Summary.styles"

export const Summary = ({cart}) => {
  const formatCurrency = useFormatCurrency()
  
  const getTotalCost = () => {
    const total = cart.reduce((prevValue, currValue) => (prevValue) + (currValue.quantity * currValue.price), 0)

    return formatCurrency(total)
  }

  return (
    <StyledSummary>
      <h2>Summary</h2>
      <hr />
      <p>{`Items: ${cart.length ? cart.length : 0}`}</p>
      <hr />
      <p>Total Cost</p>
      <p>{getTotalCost()}</p>
      <Button>Checkout</Button>
    </StyledSummary>
  )
}