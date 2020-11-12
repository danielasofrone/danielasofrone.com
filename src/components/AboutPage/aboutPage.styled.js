import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0 7%;
@media (min-width: 576px) {
  margin: 0 15%;
  }
`;

export const PageTitle = styled.div`
margin-top: 30px;
font-family: 'Roboto', sans-serif; ;
font-weight: 500;
font-size: 1.5rem;
letter-spacing: -0.03em;
color: #4B6D6D;
@media (min-width: 576px) {
  margin-top: 50px;
  font-size: 2rem;
  }
  @media (min-width: 768px) {
    margin-top: 80px;
    font-size: 2.5rem;
  }
`;

export const DescriptionContainer = styled.div`
margin-top: 30px;
font-family: 'PT Serif', serif; ;
font-size: 1rem;
line-height: 1.5rem;
letter-spacing: -0.03em;
color: rgba(0, 0, 0, 0.8);
@media (min-width: 576px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
    }
@media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 2rem;
    }
`;
