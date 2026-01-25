import styled from 'styled-components';

export const Wrapper = styled.div.attrs({
  id: 'work',
})`
    margin: 120px 0;
`;
export const TitleContainer = styled.div`
  margin: 0 10% 40px 10%;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
`;
