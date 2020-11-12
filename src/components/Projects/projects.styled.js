import styled from "styled-components";

export const Wrapper = styled.div`
margin: 0 5%;
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
  font-size: 2rem;
  margin-top: 80px;
  }
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  margin-top: 200px;
`;

export const Loading = styled.div`
  position: relative;
  position: relative;
  margin: 0 auto;
  h2 {
    font-family: "Roboto", sans-serif;
    color: #555252;
  }
`;