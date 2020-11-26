import React from 'react'
import * as S from './navbar.styled'
import { withNamespaces } from 'react-i18next';

const Navbar = ({t}) => {
  return (
    <S.NavbarWrapper>
    <S.NavbarItem>
    <a href="#about"> {t('about')}</a>
      </S.NavbarItem>
      <S.NavbarItem>
      <a href="#projects">{t('selected.projects.title')}</a>
      </S.NavbarItem>
      <S.NavbarItem>
      <a href="#visuals">{t('visuals')}</a>
      </S.NavbarItem>
      <S.NavbarItem>
      <a href="#contact">{t('contact.form.title')}</a>
      </S.NavbarItem>
    </S.NavbarWrapper>
  )
}

export default withNamespaces()(Navbar);
