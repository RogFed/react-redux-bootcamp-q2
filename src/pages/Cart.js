import React from 'react'
import { useSelector } from 'react-redux'
import { CartProduct } from '../components/cart/CartProduct'
import styled from 'styled-components'

const StyledCartContainer = styled.div`
display: flex;
flex-flow: row no-wrap;

> :first-child {
  flex-basis: 80%
}

table {
  border-top: 1px solid;
  padding-top: 20px
}

th {
  font-size: 2rem;
}

td {
  padding: 15px;
}

img {
  max-width: 100%;
}
`

const StyledCartSection = styled.section`
width: 85%;
margin: 0 auto;
`;

export const Cart = () => {
  const cart = useSelector(({cart}) => cart)

  const renderProducts = () => {
    return cart.map(item => <CartProduct item={item} key={item.id} />)
  }

  return cart.length === 0 ? <div>Your cart is empty...</div> : (
    <StyledCartSection>
      <h1>Shopping cart</h1>
      <StyledCartContainer>
        <div>
          <table>
            <thead>
              <tr>
                <th>Product Details</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {renderProducts()}
            </tbody>
          </table>
        </div>
        <div></div>
      </StyledCartContainer>
    </StyledCartSection>
  )
}
