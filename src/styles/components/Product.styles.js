import styled from "styled-components"

export const StyledProduct = styled.div`
width: 100%;
`;

export const StyledFeaturedImage = styled.div`
height: 200px;
display: flex;
justify-content: center;
align-items: center;

& img {
  max-width: 100%;
  max-height: 100%;
}
`;

export const StyledProductInformation = styled.div`
padding-top: 10px;

& > p {
  text-align: right;
  font-weight: 700;
  font-size: 1.8rem;
}
`;

export const StyledProductInformationGroup = styled.div`
min-height: 100px;
flex-flow: column;
display: flex;
justify-content: flex-end;

h2 {
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
  font-size: var(--product-heading-text-size);
}

p {
  margin: 0;
  padding-top: 10px;
}
`;