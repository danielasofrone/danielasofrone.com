import React from 'react';
import Header from '../Header/Header';
import Introduction from '../Introduction/Introduction';
import ImageGrid from '../ImageGrid/ImageGrid';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import ContactForm from '../ContactForm/Contactform';
import * as S from './homePage.styled';

const Homepage = () => {
  return (
    <S.Wrapper>
      <Header />
      <Introduction />
      <Projects />
      <ImageGrid />
      <ContactForm />
      <Footer />
    </S.Wrapper>
  );
};

export default Homepage;
