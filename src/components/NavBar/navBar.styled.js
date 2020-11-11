import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50px;
  margin-top: 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavLink = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    transition: color 0.4s ease 0s;
    font-family: 'PT Serif', serif;
    line-height: 32px;
    font-size: 24px;
    margin: 5px 20px 10px 10px;
    cursor: pointer;
    a {
      color: #000;
      text-decoration: none;
      background-color: inherit;
    }
    &:hover {
      color: #000;
      text-decoration: none;
    }
  }
`;
export const MenuIcon = styled.div`
  display: block;
  cursor: pointer;
  color: #000;
  margin-top: 10px;
  &:hover {
    color: #000;
  }
  svg {
    font-size: 20px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Title = styled.img`
  margin-top: 5px;
`;

