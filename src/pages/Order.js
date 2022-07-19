import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectLastOrder } from "../store/orders";
import { StyledOrder } from "../styles/pages/Order.styles";

export const Order = () => {
  const {order, message} = useSelector(selectLastOrder)

  return (
    <StyledOrder>
      <h1>Order: <span>#{order}</span></h1>
      <p>{message}</p>
      <Link to='/products'>Continue shopping</Link>
    </StyledOrder>
  )
}