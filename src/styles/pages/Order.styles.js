import styled from "styled-components";

export const StyledOrder = styled.section`
width: clamp(30vw,600px,100%);
height: 300px;
margin: 100px auto;
padding: 20px;
background: #edf2f4;
display: flex;
flex-flow: column;
align-items: center;
justify-content: center;

h1 {
  font-size: var(--main-heading-text-size);
}

p > span {
  font-weight: 700;
}
`