import React from 'react';
import { withNamespaces } from 'react-i18next';
import ContentCard from '../ContentCard/ContentCard';
import { featuredContent } from '../../content/content';
import * as S from './writingTeasers.styled';
import * as C from '../Introduction/introduction.styled';

const WritingTeasers = ({ t }) => {
  return (
    <S.Wrapper id="writing">
      <C.SectionTitle>
        {t('writing.section.title', { defaultValue: 'Product work & writing' })}
      </C.SectionTitle>

      <S.CardsContainer>
        {featuredContent.map((item) => (
          <ContentCard
            key={item.slug}
            to={`/articles/${item.slug}`}
            tag={t('writing.section.cardTag', { defaultValue: 'Article' })}
            title={t(`articles.${item.slug}.title`, { defaultValue: item.slug })}
            excerpt={t(`articles.${item.slug}.excerpt`, { defaultValue: '' })}
            meta={`${item.date} · ${item.readTime}`}
            cta={t('writing.section.readMoreCta', { defaultValue: 'Read article →' })}
          />
        ))}
      </S.CardsContainer>
    </S.Wrapper>
  );
};

export default withNamespaces()(WritingTeasers);
