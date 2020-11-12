import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 15%;

`;
export const Container = styled.div`
 margin-top: 100px;
 display: flex;
 flex-direction: row;

`;

export const LeftContainer = styled.div`
flex: 2;
margin-right: 40px;
`;

export const RightContainer = styled.div`
flex: 1;

`;

export const Image = styled.img`
 object-fit: cover;
 width: 100%;
 border-radius: 50%;
`;

export const PageTitle = styled.div`
  /* width: 722px; */
  font-family: 'Roboto', sans-serif; ;
  font-weight: 500;
  font-size: 2rem;
  line-height: 120%;
  letter-spacing: -0.03em;
  color: #4B6D6D;
`;

export const DescriptionContainer = styled.div`
  margin-top: 40px;
  /* width: 807px;
  height: 152px; */
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