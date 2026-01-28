import React from 'react';
import { withNamespaces } from 'react-i18next';
import Navbar from '../Navbar/Navbar';
import * as S from './header.styled';
import selfPortrait from '../../assets/img/selfPortrait.png';

const scrollToId = (id) => (e) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Header = ({ t }) => {
  return (
    <S.HeroWrapper>
      <S.NavBarHolder>
        <Navbar />
      </S.NavBarHolder>

      <S.Content>
        <S.TextCol>
          <S.Headline>
        {t('hero.title', { defaultValue: 'Daniela Sofrone' })}
            <S.Role>
              {t('hero.role', { defaultValue: 'Product Manager' })}
            </S.Role>
          </S.Headline>

          <S.Subheadline>
            {t('hero.subtitle')}
          </S.Subheadline>

          <S.Actions>
            <S.PrimaryButton href="#work" onClick={scrollToId('work')}>
              {t('hero.cta.primary')}
            </S.PrimaryButton>
            <S.SecondaryButton href="#about" onClick={scrollToId('about')}>
              {t('hero.cta.secondary')}
            </S.SecondaryButton>
          </S.Actions>
        </S.TextCol>

        <S.VisualCol>
          <S.PhotoFrame>
            <S.Photo
              src={selfPortrait}
              alt="Daniela Sofrone"
            />
          </S.PhotoFrame>
        </S.VisualCol>
      </S.Content>
    </S.HeroWrapper>
  );
};

export default withNamespaces()(Header);
