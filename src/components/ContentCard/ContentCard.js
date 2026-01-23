import React from 'react';
import PropTypes from 'prop-types';
import * as S from './contentCard.styled';

const ContentCard = ({ to, title, excerpt, cta, meta, tag, image }) => {
  return (
    <S.CardLink to={to}>
      <S.CardContainer>
        {image ? <S.CardImage src={image} alt="" /> : null}

        <S.TextContainer hasImage={!!image}>
          {tag ? <S.Tag>{tag}</S.Tag> : null}

          <S.Title>{title}</S.Title>

          {meta ? <S.Meta>{meta}</S.Meta> : null}

          {excerpt ? <S.Excerpt>{excerpt}</S.Excerpt> : null}
        </S.TextContainer>

        <S.FooterRow>
          <S.Cta>{cta}</S.Cta>
        </S.FooterRow>
      </S.CardContainer>
    </S.CardLink>
  );
};

ContentCard.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  cta: PropTypes.string,
  meta: PropTypes.string,
  tag: PropTypes.string,
  image: PropTypes.string,
};

ContentCard.defaultProps = {
  excerpt: '',
  cta: 'Read more →',
  meta: '',
  tag: '',
  image: '',
};

export default ContentCard;
