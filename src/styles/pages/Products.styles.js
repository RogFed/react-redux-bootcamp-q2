import styled from 'styled-components'

export const StyledProducts = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
gap: 40px;
width: 70%;
margin: 32px auto 0;

@media screen and (min-width: 1500px) {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
`