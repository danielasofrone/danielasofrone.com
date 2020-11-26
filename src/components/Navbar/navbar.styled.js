import styled from "styled-components";

export const Wrapper = styled.div`

`;

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavbarItem = styled.div`
  margin-left: 17px;
a {
  font-family: 'Chivo', sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  color: #fff;
  /* opacity: 0.9; */
  text-decoration: none;
  cursor: pointer;
  :hover {
    opacity: 1;
    border-bottom: 1px solid #fff;
    margin-bottom: 5px;
  }
  @media (min-width: 576px) {
    font-size: 0.875rem;
    margin-left: 20px;
  }
}
`;