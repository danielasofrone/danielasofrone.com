import React from 'react'
import * as S from './introduction.styled'
import { withNamespaces } from 'react-i18next';

const Introduction = ({t})  => {
  return (
    <S.Wrapper>
      <S.SectionTitle>
      {t('about')}
      </S.SectionTitle>
      <S.DescriptionContainer>
          <p> {t('introduction.text.one')}</p>
          <p> {t('introduction.text.two')}</p>
          <p> {t('introduction.text.three')}</p>
          <p> {t('introduction.text.four')}</p>
      </S.DescriptionContainer>
    </S.Wrapper>
  )
}

export default withNamespaces()(Introduction);
