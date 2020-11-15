import React from 'react'
import * as S from './projects.styled'
import * as C from '../Introduction/introduction.styled'
import ProjectsCard from '../ProjectsCard/ProjectsCard'
import trafalgar_preview from '../../assets/img/trafalgar_preview.png'
import gatsby_site_preview from '../../assets/img/gatsby_site_preview.png'
import eState_preview from '../../assets/img/eState_preview.png'

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
     description="Custom design implentation in ReactJs using Styled Components. Deployed with Firebase. "
     githubLink="https://github.com/danielasofrone/e-State"
     />
 </S.ProjectsContainer>

    </S.Wrapper>
    </>
  )
}

export default Projects