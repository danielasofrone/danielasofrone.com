import React from 'react'
import * as S from './projects.styled'
import * as C from '../Introduction/introduction.styled'
import ProjectsCard from '../ProjectsCard/ProjectsCard'
import trafalgar_preview from '../../assets/img/trafalgar_preview.png'
import gatsby_site_preview from '../../assets/img/gatsby_site_preview.png'
import eState_preview from '../../assets/img/eState_preview.png'
import labranda_preview from '../../assets/img/labranda_preview.png'
import event_preview from '../../assets/img/event_preview.png'
import feedback_preview from '../../assets/img/feedback_preview.png'
import { withNamespaces } from 'react-i18next';

const Projects = ({t})  => {

  return (
    <>
  <S.TitleContainer>
  <C.SectionTitle isSmall>
  {t('selected.projects.title')}
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
     image={labranda_preview}
     deploymentLink="https://www.labranda.com/en/hotel/labranda-bahia-de-lobos-26221"
     title={t('labranda.title')}
     description={t('labranda.description')}
     noGithub
     />
 <ProjectsCard
     image={trafalgar_preview}
     deploymentLink="https://healthcare-homepage.web.app"
     title={t('trafalga.title')}
     description={t('trafalgar.description')}
     githubLink="https://github.com/danielasofrone/healthcare-landing-page"
     />
  <ProjectsCard
     image={gatsby_site_preview}
     deploymentLink="https://the-content-full-gatsby.netlify.app"
     title={t('gatsby.title')}
     description={t('gatsby.description')}
     githubLink="https://github.com/danielasofrone/the-content-full-gatsby"
     />
      <ProjectsCard
     image={eState_preview}
     deploymentLink="https://e-state-df441.web.app/"
     title={t('estate.title')}
     description={t('estate.description')}
     githubLink="https://github.com/danielasofrone/e-State"
     />
    <ProjectsCard
     image={feedback_preview}
     deploymentLink="https://thefeedbackform.herokuapp.com"
     title={t('feedback.title')}
     description={t('feedback.description')}
     githubLink="https://github.com/danielasofrone/Feedback-Form"
     />
     <ProjectsCard
     image={event_preview}
     deploymentLink="https://github.com/danielasofrone/event-creator"
     title={t('event.creator.title')}
     description={t('event.creator.description')}
     githubLink="https://github.com/danielasofrone/event-creator"
     />
 </S.ProjectsContainer>
    </S.Wrapper>
    </>
  )
}

export default withNamespaces()(Projects);