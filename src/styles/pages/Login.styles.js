import styled from 'styled-components'

export const StyledLogin = styled.section`
flex-flow: column wrap;
display: flex;
width: clamp(30vw, 600px, 100%);
margin: 100px auto;
background: #edf2f4;
align-items: center;
padding: 30px;

& h1 {
  font-size: var(--main-heading-text-size);
  margin: 0 0 30px;
}

& > div {
  width: 70%;
}

& button {
  margin: 15px 0;
}
`