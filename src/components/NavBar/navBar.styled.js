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
    float:right;
    transition: color 0.4s ease 0s;
    font-family: 'PT Serif', serif;
    line-height: 1.5rem;
    font-size: 1rem;
    margin-left: 10px;
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
    @media (min-width: 576px) {
      margin-left: 20px;
      line-height: 2rem;
      font-size: 1.125rem;
  }
  @media (min-width: 768px) {
      line-height: 2.5rem;
      font-size: 1.5rem;
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
  width: 135px;
  height: 24px;
  @media (min-width: 576px) {
    width: 200px;
    height: 36px;
  }
  @media (min-width: 768px) {
    width: 270px;
    height: 48px;
  }
`;

