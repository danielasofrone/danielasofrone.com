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
     <p> Hi, I’m Daniela, a Frontend developer who loves ReactJs, UX and design implementation. I come from quite a different background: having studied language and literature, I’ve gathered experience working with customers and people in general and teaching.</p>
     <p>I’ve always been fascinated by computer science and development but I was reluctant to try it out, because of the prejudice many of us live with, that our study field should dictate the direction of our career. So five years ago I started with HTML and CSS and moved from there to JavaScript and React. I’ve also worked as a QA engineer for a year which helped me develop an eye for spotting possible issues.</p>
     <p>I like working closely with the UI/UX designers from the creation of the concept to the design implementation. I’m interested in usability and I love translating the design into a working, responsive application.</p>
     <p>I constantly push my limits to do better, I take initiative and speak up when there is the need to, and I’m genuinely interested in the growth and performance of the company I work at and making their customers happy.</p>
      </S.DescriptionContainer>
    </S.Wrapper>
  )
}

export default AboutPage
