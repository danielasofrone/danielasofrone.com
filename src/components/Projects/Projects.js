/* eslint-disable react/prop-types */
import React from 'react';
import {withNamespaces} from 'react-i18next';
import * as C from '../Introduction/introduction.styled';
import ProjectsCard from '../ProjectsCard/ProjectsCard';
import trafalgarPreview from '../../assets/img/trafalgarPreview.png';
import gatsbySitePreview from '../../assets/img/gatsbySitePreview.png';
import eStatePreview from '../../assets/img/eStatePreview.png';
import labrandaPreview from '../../assets/img/labrandaPreview.png';
import onlineShopPreview from '../../assets/img/onlineShopPreview.png';
import feedbackPreview from '../../assets/img/feedbackPreview.png';
import * as S from './projects.styled';

// eslint-disable-next-line id-length
// eslint-disable-next-line react/prop-types
// eslint-disable-next-line id-length
const Projects = ({t}) => {
  return (
    <>
      <S.TitleContainer>
        <C.SectionTitle isSmall>
          <a id="projects">{t('selected.projects.title')}</a>
        </C.SectionTitle>
        <C.Subtitle>
          <p>{t('selected.projects.text.one')}</p>
          <p>{t('selected.projects.text.two')}</p>
          <p></p>
        </C.Subtitle>
      </S.TitleContainer>
      <S.Wrapper>
        <S.ProjectsContainer>
          <ProjectsCard
            image={eStatePreview}
            deploymentLink="https://e-state-df441.web.app/"
            title={t('estate.title')}
            description={t('estate.description')}
            githubLink="https://github.com/danielasofrone/e-State"
          />
          <ProjectsCard
            image={trafalgarPreview}
            deploymentLink="https://healthcare-homepage.web.app"
            title={t('trafalga.title')}
            description={t('trafalgar.description')}
            githubLink="https://github.com/danielasofrone/healthcare-landing-page"
          />
          <ProjectsCard
            image={gatsbySitePreview}
            deploymentLink="https://the-content-full-gatsby.netlify.app"
            title={t('gatsby.title')}
            description={t('gatsby.description')}
            githubLink="https://github.com/danielasofrone/the-content-full-gatsby"
          />
          <ProjectsCard
            image={feedbackPreview}
            deploymentLink="https://feedback-form-ten.vercel.app"
            title={t('feedback.title')}
            description={t('feedback.description')}
            githubLink="https://github.com/danielasofrone/Feedback-Form"
          />
          <ProjectsCard
            image={onlineShopPreview}
            deploymentLink="https://online-shop-d9548.web.app/"
            title={t('online.shop.title')}
            description={t('online.shop.description')}
            githubLink="https://github.com/danielasofrone/online_shop"
          />
          <ProjectsCard
            image={labrandaPreview}
            deploymentLink="https://www.labranda.com/"
            title={t('labranda.title')}
            description={t('labranda.description')}
            noGithub
          />
        </S.ProjectsContainer>
      </S.Wrapper>
    </>
  );
};

export default withNamespaces()(Projects);
