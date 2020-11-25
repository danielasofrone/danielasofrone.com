import React from 'react'
import * as S from './homePage.styled'
import Introduction from '../Introduction/Introduction'
import ImageGrid from '../ImageGrid/ImageGrid'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'
import ContactForm from '../ContactForm/Contactform'

const Homepage = ()  => {
  return (
    <S.Wrapper>
     <Introduction />
      <Projects />
      <ImageGrid />
      <ContactForm />
      <Footer />
    </S.Wrapper>
  )
}

export default Homepage
