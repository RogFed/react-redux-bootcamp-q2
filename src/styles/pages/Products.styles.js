import styled from 'styled-components'

export const StyledProducts = styled.section`
width: 70%;
margin: 32px auto 0;
`

export const StyledProductsGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
gap: 40px;

@media screen and (min-width: 1500px) {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
`