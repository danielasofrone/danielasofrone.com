import React from 'react';
import {images} from './images'
import * as S from './imageGrid.styled'
import { withNamespaces } from 'react-i18next';


const ImageGridList = ({t}) => {

  return (
    <>
    <S.Wrapper>
     <S.SectionTitle isSmall>
     <a id="visuals">{t('visuals')}</a>
      </S.SectionTitle>
      <S.Subtitle>
        <p>{t('visuals.text.one')}</p>
     <a href="https://www.flickr.com/photos/steepwater" target="blank">  {t('visuals.text.two')}</a>
      </S.Subtitle>
    </S.Wrapper>

      <S.ImageGridContainer>
        {images.map(image => (
      <S.ImageGridColumn key={image}>
      <img src={image} />
      </S.ImageGridColumn>
              ))}
        {images[1].map(image => (
      <S.ImageGridColumn key={image}>
          <img src={image} />
      </S.ImageGridColumn>
          ))}
          {images[2].map(image => (
      <S.ImageGridColumn key={image}>
          <img src={image} />
      </S.ImageGridColumn>
        ))}
      </S.ImageGridContainer>
    </>
  );
}

export default withNamespaces()(ImageGridList);
