import styled from "styled-components";

export const Wrapper = styled.div`
 margin: 0;
`;

export const ProjectsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex-wrap: wrap;
align-items: center;

@media (min-width: 768px) {
  flex-direction: row;
  }
`;

export const TitleContainer = styled.div`
margin: 0 10%;
`;
