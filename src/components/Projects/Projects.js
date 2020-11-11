import React from 'react'
import NavBar from '../NavBar/NavBar'
import * as S from './projects.styled'


const Projects = ()  => {
  return (
    <S.Wrapper>
      <NavBar/>
      <S.PageTitle>
   Projects
      </S.PageTitle>
    </S.Wrapper>
  )
}

export default Projects