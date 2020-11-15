import React from 'react'
import * as S from './footer.styled'
import icon_github from '../../assets/icons/icon_github.svg'
import icon_linkedin from '../../assets/icons/icon_linkedin.svg'
import icon_email from '../../assets/icons/icon_email.svg'
import icon_flickr from '../../assets/icons/icon_flickr.svg'

const Footer = ()  => {
  return (
    <S.Wrapper>
      <S.IconsContainer>
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
      </S.IconsContainer>
    </S.Wrapper>
  )
}

export default Footer
