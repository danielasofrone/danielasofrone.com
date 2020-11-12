import React from 'react'
import NavBar from '../NavBar/NavBar'
import * as S from './homePage.styled'
import icon_github from '../../assets/icon_github.svg'
import icon_linkedin from '../../assets/icon_linkedin.svg'
import icon_email from '../../assets/icon_email.svg'
import icon_flickr from '../../assets/icon_flickr.svg'

const Homepage = ()  => {
  return (
    <S.Wrapper>
      <NavBar/>
    <S.PageTitle>
      Hi, my name is Daniela.
      </S.PageTitle>
      <S.DescriptionContainer>
        I'm a Frontend Developer who loves ReactJs, UX and design implementation. I also have experience as a QA engineer and working with users in general. I love working in an agile, collaborative environment, creating responsive React applications and extending my knowledge.
      </S.DescriptionContainer>
      <S.IconsContainer>
        <a href="https://www.linkedin.com/in/daniela-sofrone-2ab7289b/" target="blank">
        <S.Icon src ={icon_linkedin}>
        </S.Icon>
        </a>
        <a href="https://github.com/danielasofrone?tab=repositories" target="blank">
        <S.Icon src ={icon_github} />
        </a>
        <a href="mailto:daniela.sofrone.sd@gmail.com" target="blank">
        <S.Icon src ={icon_email} />
        </a>
        <a href="https://www.flickr.com/photos/steepwater/" target="blank">
        <S.Icon src ={icon_flickr} isSmall/>
        </a>
      </S.IconsContainer>

    </S.Wrapper>
  )
}

export default Homepage
