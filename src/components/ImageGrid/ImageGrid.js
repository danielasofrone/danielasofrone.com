import React from 'react';
// import images from './images.json'
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
        <S.ImageGridColumn>
          <img src="https://live.staticflickr.com/65535/50066255662_aea10a8144_h.jpg" />
          <img src="https://live.staticflickr.com/65535/48560634911_d3a01a6cf9_h.jpg"/>
          <img src="https://live.staticflickr.com/7814/46589423565_7028356598_h.jpg"/>
          <img src="https://live.staticflickr.com/65535/48881738212_4badac465c_h.jpg"/>
          <img src="https://live.staticflickr.com/7921/47438134842_719db2c78d_h.jpg"/>
        </S.ImageGridColumn>
        <S.ImageGridColumn >
          <img src="https://live.staticflickr.com/65535/47729673622_e8d1c785ee_h.jpg"/>
          <img src="https://live.staticflickr.com/65535/47669669411_9aa4c98f93_h.jpg"/>
          <img src="https://live.staticflickr.com/3680/33401663286_1530d8b00d_h.jpg"/>
          <img src= "https://live.staticflickr.com/65535/50045504998_ddd3e06964_h.jpg"/>
          <img src= "https://live.staticflickr.com/1904/45538926344_678ab9e89e_h.jpg" />
        </S.ImageGridColumn>
        <S.ImageGridColumn >
          <img src="https://live.staticflickr.com/890/26738587907_00e5c2aae8_h.jpg"  />
          <img src="https://live.staticflickr.com/876/42907150421_92f88cadf9_h.jpg"/>
          <img src="https://live.staticflickr.com/4161/34321420422_3b79a9c5c3_h.jpg"/>
          <img src= "https://live.staticflickr.com/897/40432547454_a807afaf87_h.jpg"/>
          <img src="https://live.staticflickr.com/65535/48122451242_8c87c44f86_h.jpg"/>
        </S.ImageGridColumn>
      </S.ImageGridContainer>
    </>
  );
}

export default withNamespaces()(ImageGridList);
