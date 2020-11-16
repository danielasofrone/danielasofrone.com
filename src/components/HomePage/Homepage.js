import React from 'react'
import * as S from './homePage.styled'
import Introduction from '../Introduction/Introduction'
import ImageGrid from '../ImageGrid/ImageGrid'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'

const Homepage = ()  => {
  return (
    <S.Wrapper>
     <Introduction />
      <Projects />
      <ImageGrid />
      <Footer />
    </S.Wrapper>
  )
}

export default Homepage
