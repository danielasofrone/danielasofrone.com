import React from 'react'
import NavBar from '../NavBar/NavBar'
import * as S from './aboutPage.styled'


const AboutPage = ()  => {
  return (
    <S.Wrapper>
      <NavBar/>
      <S.PageTitle>
    About me
      </S.PageTitle>
      <S.DescriptionContainer>
      Hi, I’m Daniela, a Frontend Developer who loves ReactJs, UX and design implementation. I come from quite a different background, having studied language and literature I’ve gathered experience working with customers and teaching.
I’ve always been fascinated by computer science and development but I was reluctant to try it out, because of the prejudice many of us live with, that our study field should dictate the direction of our career. So five years ago I started with HTML and CSS and moved from there to JavaScript and React. I’ve also worked as a QA engineer for a year which helped me develop an eye for spotting possible issues.
      </S.DescriptionContainer>
    </S.Wrapper>
  )
}

export default AboutPage
