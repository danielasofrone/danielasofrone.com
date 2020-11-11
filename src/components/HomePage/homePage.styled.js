import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 15%;
  /* font-family: 'Roboto', sans-serif; */
  /* font-family: 'PT Serif', serif; */
`;

export const PageTitle = styled.div`
  margin-top: 60px;
  width: 722px;
  height: 154px;
  font-family: 'Roboto', sans-serif; ;
  font-weight: 500;
  font-size: 3.125rem;
  line-height: 120%;
  letter-spacing: -0.03em;
  color: #4B6D6D;
`;

export const DescriptionContainer = styled.div`
  margin-top: 40px;
  width: 807px;
  height: 152px;
  font-family: 'PT Serif', serif; ;
  font-size: 1.5rem;
  line-height: 160%;
  letter-spacing: -0.03em;
  color: rgba(0, 0, 0, 0.8);
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
`;

export const Icon = styled.img`
  width: ${({ isSmall }) => (isSmall ? "30px" : "38px")};  
  height: ${({ isSmall }) => (isSmall ? "30px" : "38px")};  
  margin-top: ${({ isSmall }) => (isSmall ? "5px" : "")};  
  margin-right: 15px;
  cursor: pointer;
`;