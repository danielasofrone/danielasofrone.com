import React from "react";
import * as S from "./navBar.styled";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'

const NavBar = () => (
  <S.Wrapper>
      <NavLink to={"/"}>
      <S.Title src={logo}>
        </S.Title>
      </NavLink>
    <S.Navigation>
      <S.NavLink>
        <NavLink to={"/projects"} activeStyle={{
    textDecoration: "underline"}}>Projects</NavLink>
      </S.NavLink>
      <S.NavLink>
        <NavLink to={"/about"} activeStyle={{
     textDecoration: "underline"}}>About me</NavLink>
      </S.NavLink>
    </S.Navigation>
  </S.Wrapper>
);


export default NavBar;