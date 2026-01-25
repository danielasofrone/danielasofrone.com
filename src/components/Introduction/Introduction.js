import React from 'react';
import { withNamespaces } from 'react-i18next';
import * as S from './introduction.styled';

const Introduction = ({ t }) => {
  const paragraphs = [
    t('introduction.text.one'),
    t('introduction.text.two'),
    t('introduction.text.three'),
    t('introduction.text.four'),
  ];

  return (
    <S.Wrapper id="about">
      <S.SectionTitle>
        {t('about')}
      </S.SectionTitle>

      <S.DescriptionContainer>
        {paragraphs.map(paragraph => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </S.DescriptionContainer>
    </S.Wrapper>
  );
};

export default withNamespaces()(Introduction);
