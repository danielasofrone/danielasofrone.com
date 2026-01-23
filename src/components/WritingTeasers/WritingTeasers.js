import React from 'react';
import {withNamespaces} from 'react-i18next';
import ContentCard from '../ContentCard/ContentCard';
import { featuredContent } from '../../content/content';
import * as S from './writingTeasers.styled';
import * as C from '../Introduction/introduction.styled';

const WritingTeasers = ({t}) => {

  return (
    <S.Wrapper id="writing">
      <C.SectionTitle>{t('writing.section.title')}</C.SectionTitle>

      <S.CardsContainer>
        {featuredContent.map((item) => (
          <ContentCard
            key={item.slug}
            to={`/articles/${item.slug}`}
            tag="Article"
            title={item.title}
            excerpt={item.excerpt}
            meta={`${item.date} · ${item.readTime}`}
            cta={t('writing.section.readMoreCta', 'Read article →')}
          />
        ))}
      </S.CardsContainer>
    </S.Wrapper>
  );
};

export default  withNamespaces()(WritingTeasers);
