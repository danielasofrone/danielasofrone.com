import styled from 'styled-components';

export const HeroWrapper = styled.header`
  min-height: 90vh;
  background: linear-gradient(180deg, #fbfbfb 0%, #f3f4f6 100%);
  color: #111;
`;

export const NavBarHolder = styled.div`
  padding: 1.75rem 3rem;

  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem;
  }
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 3.5rem 3rem 4rem 3rem;

  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.5rem 3.5rem 1.5rem;
    gap: 2.25rem;
  }
`;

export const TextCol = styled.div``;

export const Headline = styled.h1`
  font-weight: 600;
  letter-spacing: -0.03em;
  margin: 0 0 0.75rem 0;
  color: #344854;
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  line-height: 1.12;
`;

export const Role = styled.span`
  display: block;
  font-weight: 500;
  margin-top: 0.35rem;
  color: #344854;
  font-size: clamp(1.25rem, 2.2vw, 1.6rem);
`;

export const Subheadline = styled.p`
  font-size: 1.15rem;
  line-height: 1.65;
   color: #344854;
  max-width: 46rem;
  margin: 0 0 2rem 0;
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
`;

export const PrimaryButton = styled.a`
  background: #344854;
  color: #fff;
  padding: 0.9rem 1.35rem;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;

  &:hover {
    background: #344854;
  }
`;

export const SecondaryButton = styled.a`
  background: transparent;
  color: #344854;
  padding: 0.9rem 1.15rem;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  border: 1px solid rgba(0,0,0,0.18);

  &:hover {
    border-color: rgba(0,0,0,0.35);
  }
`;

export const VisualCol = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;

export const PhotoFrame = styled.div`
  width: min(360px, 70vw);
  aspect-ratio: 1 / 1;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.10);
  border: 1px solid rgba(0,0,0,0.08);
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
