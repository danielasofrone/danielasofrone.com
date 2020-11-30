import React, {useState, useRef, useEffect} from 'react'
import * as S from './introduction.styled'
import { withNamespaces } from 'react-i18next';


const Introduction = ({t})  => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

   useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

const paragraphs = [
  t('introduction.text.one'),
  t('introduction.text.two'),
  t('introduction.text.three'),
  t('introduction.text.four')
]

  return (
    <S.Wrapper>
      <S.SectionTitle>
      <a id="about">{t('about')}</a>
      </S.SectionTitle>
      <S.DescriptionContainer>
     <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}>
      {paragraphs.map(paragraph => (
        <div key={paragraph} >
            <p>{paragraph}</p>
        </div>
      ))}
      </div>
      </S.DescriptionContainer>
    </S.Wrapper>
  )
}

export default withNamespaces()(Introduction);
