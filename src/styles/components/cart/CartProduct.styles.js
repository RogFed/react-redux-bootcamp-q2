import styled from "styled-components";

export const StyledQuantityCell = styled.div`
input {
  width: 100%;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 5px;
}
`
export const StyledAlignRightCell = styled.div`
text-align: right;
`

export const StyledDetailsCell = styled.div`
display: flex;
flex-flow: row nowrap;

> :first-child {
  max-width: 150px;
  padding: 0 10px;
}
`