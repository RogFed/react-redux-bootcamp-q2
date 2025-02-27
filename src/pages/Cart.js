import React from 'react'
import { useSelector } from 'react-redux'
import { Summary } from '../components/cart/Summary'
import { CartProduct } from '../components/cart/CartProduct'
import { selectAllFromCart, totalItemsInCart, getTotalCost } from '../store/cart'
import { StyledCartContainer, StyledCartSection } from '../styles/pages/Cart.styles'

export const Cart = () => {
  const cart = useSelector(selectAllFromCart)
  const totalItems = useSelector(totalItemsInCart)
  const totalCost = useSelector(getTotalCost)

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
        <Summary totalItems={totalItems} totalCost={totalCost} />
      </StyledCartContainer>
    </StyledCartSection>
  )
}
