import styled from "styled-components";

export const Wrapper = styled.div`
 margin: 0 10%;
@media (min-width: 576px) {
  margin: 0 25%;
  }
`;

export const SectionTile = styled.div`
  text-align: center;
  margin: 40px 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: -0.03em;
  color: #344854;
:before,
:after {
  background-color: #000;
  content: "";
  display: inline-block;
  height: 2px;
  position: relative;
  vertical-align: middle;
  width: 10%;
}

:before {
  right: 0.5em;
  margin-left: -50%;
}

:after {
  left: 0.5em;
  margin-right: -50%;
}
@media (min-width: 576px) {
  margin: 70px 0;
  font-size: 2rem;
  }
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }

`;

export const DescriptionContainer = styled.div`
  text-align: justify;
  margin-top: 30px;
  font-family: 'PT Serif', serif;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: -0.03em;
  color: rgba(0, 0, 0, 0.8);
  :after {
  content: "";
  display: inline-block;
  width: 100%;
}
@media (min-width: 576px) {
    margin-top: 40px;
    font-size: 1.125rem;
    line-height: 1.75rem;
    }
@media (min-width: 768px) {
    margin-top: 50px;
    font-size: 1.25rem;
    line-height: 2rem;
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