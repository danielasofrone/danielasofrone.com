import React from 'react'
import * as S from './homePage.styled'
import Introduction from '../Introduction/Introduction'
import ImageGrid from '../ImageGrid/ImageGrid'
import Projects from '../Projects/Projects'

const Homepage = ()  => {
  return (
    <S.Wrapper>
     <Introduction />
      <ImageGrid />
      <Projects />
    </S.Wrapper>
  )
}

export default Homepage
