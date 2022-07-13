import React from "react";
import styled from "styled-components"
import { Button } from '../Button'

const StyledQuantityCell = styled.div`
input {
  max-width: 100%;
  margin-bottom: 10px;
}
`
const StyledAlignRightCell = styled.div`
text-align: right;
`

// TODO: Add styling to product grid. 

export const CartProduct = ({item}) => {
  const {images, name, quantity, price, id} = item

  return (
    <tr>
      <td>
        <div>
          <div>
            <img src={images} alt={name} />
          </div>
          <div>
            <p>{name}</p>
            <p>{`Product code: ${id}`}</p>
          </div>
        </div>
      </td>
      <td>
        <StyledQuantityCell>
          <input value={quantity}/>
          <Button>Remove</Button>
        </StyledQuantityCell>
      </td>
      <td>
        <StyledAlignRightCell>
          <p>{`$${price}`}</p>
        </StyledAlignRightCell>
      </td>
      <td>
        <StyledAlignRightCell>
          <p>{`$${price * quantity}`}</p>
        </StyledAlignRightCell>
      </td>
    </tr>
  )
}