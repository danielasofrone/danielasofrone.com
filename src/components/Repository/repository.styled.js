import styled from "styled-components";

export const RepoContainer = styled.li`
text-align: left;
border-bottom: 1px solid #e1e4e8;
box-sizing: border-box;
padding-top: 24px;
padding-bottom: 24px;
margin: 40px 20px 40px 0;
list-style-type: none;
`;

export const RepoTitle = styled.div`
display: flex;
`;

export const RepoName = styled.div`
font-family: "Roboto", sans-serif;
color: #000;
font-size: 18px;
padding-bottom: 10px;
margin-right: 5px;
a {
  color: #000;
  text-decoration: none;
  :visited {
    color: #000;
  }
}
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RepoDescription = styled.div`
  font-family: "Roboto", sans-serif;
  color: #555252;
  font-size: 14px;
  margin-top: 8px;
  padding-right: 8px;
  white-space: normal;
`;