import React from 'react'
import * as S from './header.styled'
import { withNamespaces } from 'react-i18next';

const Header = ({t}) => {

  return (
    <S.Wrapper>
    <S.Parallax>
    <S.CenteredText>
      {t('greeting')}
    </S.CenteredText>
    </S.Parallax>
    </S.Wrapper>
  )
}

export default withNamespaces()(Header);

