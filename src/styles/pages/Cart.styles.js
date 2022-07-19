import styled from 'styled-components'

export const StyledCartContainer = styled.div`
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

export const StyledCartSection = styled.section`
width: 85%;
margin: 0 auto;
`;
