import React from 'react';
import Header from '../Header/Header';
import Introduction from '../Introduction/Introduction';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import WritingTeasers from '../WritingTeasers/WritingTeasers';
import * as S from './homePage.styled';


const Homepage = () => {
  return (
    <S.Wrapper>
      <Header />
      <Introduction />
      <WritingTeasers/>
      <Projects />
      <Footer />
    </S.Wrapper>
  );
};

export default Homepage;
