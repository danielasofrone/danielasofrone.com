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

const Projects = ()  => {

  return (
    <>
  <S.TitleContainer>
  <C.SectionTitle isSmall>
    Selected projects
   </C.SectionTitle>
 <C.Subtitle>
   <p>These are some of the projects I've worked on, both personl and work related.</p>
   <p>If you want to see more of my work please visit my Github account.</p>
 </C.Subtitle>
  </S.TitleContainer>
    <S.Wrapper>
 <S.ProjectsContainer>
 <ProjectsCard
     image={labranda_preview}
     deploymentLink="https://www.labranda.com/en/hotel/labranda-bahia-de-lobos-26221"
     title="Labranda Hotels"
     description="One of my last work projects, a booking portal for the Labranda hotels, where I created most of the components."
     noGithub
     />
 <ProjectsCard
     image={trafalgar_preview}
     deploymentLink="https://healthcare-homepage.web.app"
     title="Healthcare landing page"
     description="Custom design implementation for a Homepage created in React using Styled Components. Deployed with Firebase."
     githubLink="https://github.com/danielasofrone/healthcare-landing-page"
     />
  <ProjectsCard
     image={gatsby_site_preview}
     deploymentLink="https://the-content-full-gatsby.netlify.app"
     title="Gatsby - Contentful blog"
     description="React application created using GatsbyJs, GraphQL and Contentful. Deployed with Netlify."
     githubLink="https://github.com/danielasofrone/the-content-full-gatsby"
     />
      <ProjectsCard
     image={eState_preview}
     deploymentLink="https://e-state-df441.web.app/"
     title="Imobiliar market"
     description="Custom design implentation in ReactJs using Styled Components. Used filters and  query strings. Deployed with Firebase. "
     githubLink="https://github.com/danielasofrone/e-State"
     />
    <ProjectsCard
     image={feedback_preview}
     deploymentLink="https://thefeedbackform.herokuapp.com"
     title="Feedback form"
     description="Radio button based selection form. ReactJs, Styled Components, Contenful Management API. Deployed with Heroku. "
     githubLink="https://github.com/danielasofrone/Feedback-Form"
     />
     <ProjectsCard
     image={event_preview}
     deploymentLink="https://github.com/danielasofrone/event-creator"
     title="Event creator"
     description="Event creating app, displays the existing participants, add own event, login. React forms, NextJs, styled components, axios."
     githubLink="https://github.com/danielasofrone/event-creator"
     />
 </S.ProjectsContainer>
    </S.Wrapper>
    </>
  )
}

export default Projects