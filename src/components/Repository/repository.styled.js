import styled from "styled-components";

export const RepoContainer = styled.li`
  text-align: left;
  border-bottom: 1px solid #e1e4e8;
  box-sizing: border-box;
  padding-top: 24px;
  padding-bottom: 24px;
  margin: 20px 0;
  list-style-type: none;
  @media (min-width: 576px) {
    margin: 40px 0;
    }
  `;

export const RepoTitle = styled.div`
  display: flex;
  :hover {
    text-decoration: underline;
  }
  `;

export const RepoName = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  padding-bottom: 10px;
  margin-right: 5px;
a {
  color: #4B6D6D;
  text-decoration: none;
}
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RepoDescription = styled.div`
  font-family: 'PT Serif', serif;
  color: #555252;
  font-size: 1rem;
  margin-top: 8px;
  padding-right: 8px;
  white-space: normal;
`;

export const DeploymentLink = styled.div`
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  padding-bottom: 10px;
  margin-right: 5px;
  text-decoration: none;
a {
  color: #4B6D6D;
  text-decoration: none;
  :hover { color: #4B6D6D;
    text-decoration: underline;
  }
}
`;