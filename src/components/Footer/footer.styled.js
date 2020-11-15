import styled from "styled-components";

export const Wrapper = styled.div`
 margin: 0 10%;
@media (min-width: 576px) {
  margin: 0 25%;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 100px 0;
  justify-content: center;
`;

export const Icon = styled.img`
  width: ${({ isSmall }) => (isSmall ? "30px" : "38px")};
  height: ${({ isSmall }) => (isSmall ? "30px" : "38px")};
  margin-top: ${({ isSmall }) => (isSmall ? "5px" : "")};
  margin-right: 30px;
  cursor: pointer;
`;