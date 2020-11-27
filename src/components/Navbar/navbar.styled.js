import styled from "styled-components";

export const Wrapper = styled.div`

`;

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavbarItem = styled.div`
  display: none;
  @media (min-width: 768px) {
    margin-left: 20px;
    display: block;
    a {
      font-family: 'Chivo', sans-serif;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 0.875rem;
      letter-spacing: 0.1em;
      color: #fff;
      text-decoration: none;
      cursor: pointer;
      :hover {
        opacity: 1;
        border-bottom: 1px solid #fff;
        margin-bottom: 5px;
        }
        }
      }
`;

export const BurgerMenu = styled.div`
  display: block;
  margin-right: 15%;
  cursor: pointer;
@media (min-width: 768px) {
    display: none;
  }
`;