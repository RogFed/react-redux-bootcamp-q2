import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"
import { updateQuantity, removeFromCart } from "../../store/cart";
import { Button } from '../Button'
import { useFormatCurrency } from "../../hooks";
import { StyledQuantityCell, StyledAlignRightCell, StyledDetailsCell } from "../../styles/components/cart/CartProduct.styles";

export const CartProduct = ({item}) => {
  const {images, name, quantity, price, id} = item
  const dispatch = useDispatch()
  const [currentQuantity, setCurrentQuantity] = useState(quantity)
  const formatCurrency = useFormatCurrency();
  
  const handleQuantityUpdate = e => setCurrentQuantity(e.target.value)

  const handleRemoveProduct = () => dispatch(removeFromCart(id))

  useEffect(() => {
    if(currentQuantity === quantity) return

    const data = {
      id,
      quantity: parseInt(currentQuantity)
    };

    dispatch(updateQuantity(data))
  }, [currentQuantity, dispatch, quantity, id])

  return (
    <tr>
      <td>
        <StyledDetailsCell>
          <div>
            <img src={images} alt={name} />
          </div>
          <div>
            <p>{name}</p>
            <p>{`Product code: ${id}`}</p>
          </div>
        </StyledDetailsCell>
      </td>
      <td>
        <StyledQuantityCell>
          <input value={currentQuantity} type="number" min="1" onChange={handleQuantityUpdate}/>
          <Button clickHandler={handleRemoveProduct}>Remove</Button>
        </StyledQuantityCell>
      </td>
      <td>
        <StyledAlignRightCell>
          <p>{formatCurrency(price)}</p>
        </StyledAlignRightCell>
      </td>
      <td>
        <StyledAlignRightCell>
          <p>{formatCurrency(price * quantity)}</p>
        </StyledAlignRightCell>
      </td>
    </tr>
  )
}