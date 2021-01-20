import React from 'react';
import {withNamespaces} from 'react-i18next';
import {ParallaxBanner} from 'react-scroll-parallax';
import Navbar from '../Navbar/Navbar';
import * as S from './header.styled';

const Header = ({t}) => {
  return (
    <ParallaxBanner
      layers={[
        {
          image:
            'https://live.staticflickr.com/3803/33269203366_888aa81cbd_h.jpg',
          amount: -0.2,
        },
      ]}
      style={{
        height: '750px',
      }}
    >
      <S.NavBarHolder>
        <Navbar />
      </S.NavBarHolder>
      <S.CenteredText>{t('greeting')}</S.CenteredText>
    </ParallaxBanner>
  );
};

export default withNamespaces()(Header);
