import styled from "styled-components";

export const ServicesCardContainer = styled.div`
    display: inline-block;
    position: relative;
    max-width: 355px;
    background-color: white;
    vertical-align: top;
    text-align: left;
    min-height: 490px;
    margin: 20px;
    box-shadow: 0 20px 20px rgba(0,0,0,.08);
    white-space: normal;
    transition: box-shadow 200ms cubic-bezier(.02, .01, .47, 1), transform 200ms cubic-bezier(.02, .01, .47, 1);
    color: #4B4F56;
    &:hover,
  &:focus {
    transform: scale3d(1.050, 1.050, 1);

    &::after {
      opacity: 1;
    }
  }
`;
export const ServicesCardImage = styled.img`
    width: 100%;
    height: 250px;
`;

export const TextContainer = styled.div`
  padding: 0 25px 0 25px;
`;

export const ServicesCardTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 56px;
  margin-bottom: 10px;
  cursor: pointer;
 a {
  text-decoration: none;
  color: #344854;
 }
  &:hover {
    opacity: 0.8;
    transition: opacity 0.3s;
    text-decoration: underline;
  }
`;

export const ServicesCardDescription = styled.div`
  font-family:'PT Serif', serif;
  font-weight: 300;
  font-size: 1rem;
  line-height: 28px;
  color: #677B8C;
  border-bottom: 1px solid #E9EBEE;
  padding-bottom: 20px;
`;

export const GithubIconContainer = styled.div`
  padding: 10px 25px 30px 25px;
  cursor: pointer;
  visibility: ${({ noGithub }) => (noGithub ? "hidden" : "visible")};
`;

export const Icon = styled.img`
  width: ${({ isSmall }) => (isSmall ? "30px" : "38px")};
  height: ${({ isSmall }) => (isSmall ? "30px" : "38px")};
  margin-top: ${({ isSmall }) => (isSmall ? "5px" : "")};
  margin-right: 15px;
  cursor: pointer;
`;