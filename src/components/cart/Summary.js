import React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { Button } from "../Button"
import { useFormatCurrency } from "../../hooks"
import { triggerPostOrder } from "../../store/cart"
import { StyledSummary } from "../../styles/components/cart/Summary.styles"

export const Summary = ({totalItems, totalCost}) => {
  const formatCurrency = useFormatCurrency()
  const dispatch = useDispatch()
  const history = useHistory()

  const handleCheckout = () => dispatch(triggerPostOrder(history))

  return (
    <StyledSummary>
      <h2>Summary</h2>
      <hr />
      <p>{`Items: ${totalItems}`}</p>
      <hr />
      <p>Total Cost</p>
      <p>{formatCurrency(totalCost)}</p>
      <Button isDisabled={totalItems === 0 ? true : false} clickHandler={handleCheckout}>Checkout</Button>
    </StyledSummary>
  )
}