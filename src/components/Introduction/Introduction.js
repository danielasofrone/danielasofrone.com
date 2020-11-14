import React from 'react'
import * as S from './introduction.styled'
// import icon_github from '../../assets/icons/icon_github.svg'
// import icon_linkedin from '../../assets/icons/icon_linkedin.svg'
// import icon_email from '../../assets/icons/icon_email.svg'
// import icon_flickr from '../../assets/icons/icon_flickr.svg'

const Introduction = ()  => {
  return (
    <S.Wrapper>
      <S.SectionTile isSmall>
        Profile
      </S.SectionTile>
      <S.DescriptionContainer>
          <p> I'm a Frontend developer who loves ReactJs, UX and design implementation. I come from quite a different background: having studied language and literature, I’ve gathered experience working with customers and people in general and teaching.</p>
          <p>I’ve always been fascinated by computer science and development but I was reluctant to try it out, because of the prejudice many of us live with, that our study field should dictate the direction of our career. So five years ago I started with HTML and CSS and moved from there to JavaScript and React. I’ve also worked as a QA engineer for a year which helped me develop an eye for spotting possible issues.</p>
          <p>I like working closely with the UI/UX designers from the creation of the concept to the design implementation. I’m interested in usability and I love translating the design into a working, responsive application.</p>
          <p>I constantly push my limits to do better, I take initiative and speak up when there is the need to, and I’m genuinely interested in the growth and performance of the company I work at and making their customers happy.</p>
      </S.DescriptionContainer>
      {/* <S.IconsContainer>
        <a href="https://www.linkedin.com/in/daniela-sofrone-2ab7289b/" target="blank">
        <S.Icon src ={icon_linkedin}>
        </S.Icon>
        </a>
        <a href="https://github.com/danielasofrone?tab=repositories" target="blank">
        <S.Icon src ={icon_github} />
        </a>
        <a href="mailto:danielasofrone.com@gmail.com" target="blank">
        <S.Icon src ={icon_email} />
        </a>
        <a href="https://www.flickr.com/photos/steepwater/" target="blank">
        <S.Icon src ={icon_flickr} isSmall/>
        </a>
      </S.IconsContainer> */}
    </S.Wrapper>
  )
}

export default Introduction
