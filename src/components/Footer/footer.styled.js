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
  padding-top: 50px;
  justify-content: center;
  clear: both;
`;

export const Icon = styled.img`
  width: ${({ isSmall }) => (isSmall ? "23px" : "30px")};
  height: ${({ isSmall }) => (isSmall ? "23px" : "30px")};
  margin-top: ${({ isSmall }) => (isSmall ? "5px" : "")};
  margin-right: 25px;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale3d(1.050, 1.050, 1);

    &::after {
      opacity: 1;
    }
  }
  @media (min-width: 576px) {
    width: ${({ isSmall }) => (isSmall ? "30px" : "38px")};
    height: ${({ isSmall }) => (isSmall ? "30px" : "38px")};
    margin-right: 30px;
  }
`;

export const DropdownContainer = styled.div`
 
`;