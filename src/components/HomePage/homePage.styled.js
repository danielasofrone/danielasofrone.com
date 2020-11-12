import styled from "styled-components";

export const Wrapper = styled.div`
 margin: 0 7%;
@media (min-width: 576px) {
  margin: 0 15%;
  }
`;

export const PageTitle = styled.div`
  width: 100%;
  font-family: 'Roboto', sans-serif; ;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.75rem;
  margin-top: 50px;
  letter-spacing: -0.03em;
  color: #4B6D6D;
  @media (min-width: 576px) {
    font-size: 2rem;
    line-height: 2.25rem;
  }
  @media (min-width: 768px) {
    margin-top: 100px;
    width: 722px;
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  font-family: 'PT Serif', serif;
  font-size: 1.25rem;
  line-height: 1.75rem;
  letter-spacing: -0.03em;
  color: rgba(0, 0, 0, 0.8);
  @media (min-width: 576px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  @media (min-width: 768px) {
    margin-top: 40px;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

export const Icon = styled.img`
  width: ${({ isSmall }) => (isSmall ? "30px" : "38px")};
  height: ${({ isSmall }) => (isSmall ? "30px" : "38px")};
  margin-top: ${({ isSmall }) => (isSmall ? "5px" : "")};
  margin-right: 15px;
  cursor: pointer;
`;