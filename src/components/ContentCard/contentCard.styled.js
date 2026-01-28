import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: inline-block;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 355px;
  width: 355px;
  background-color: white;
  text-align: left;
  min-height: 420px;
  margin: 20px;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  transition: box-shadow 200ms cubic-bezier(0.02, 0.01, 0.47, 1),
    transform 200ms cubic-bezier(0.02, 0.01, 0.47, 1);
  color: #4b4f56;

  &:hover,
  &:focus {
    transform: scale3d(1.05, 1.05, 1);
  }
`;


export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  padding: 20px 25px 0 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Tag = styled.div`
  display: inline-block;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #677b8c;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 1.35rem;
  line-height: 1.4;
  margin-bottom: 10px;
  cursor: pointer;
  color: #344854;

  ${CardContainer}:hover & {
    opacity: 0.9;
    text-decoration: underline;
  }
`;

export const Meta = styled.div`
  font-weight: 300;
  font-size: 0.9rem;
  color: #677b8c;
  margin-bottom: 14px;
`;

export const Excerpt = styled.p`
  margin-top: 0.75rem;
  color: #6b7280;
  font-size: 0.95rem;
  line-height: 1.5;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  /* Default: mobile */
  -webkit-line-clamp: 4;

  /* Tablet / desktop: allow more space */
  @media (min-width: 768px) {
    -webkit-line-clamp: 5;
  }
`;


export const FooterRow = styled.div`
  padding: 10px 25px 30px 25px;
`;

export const Cta = styled.div`
  font-weight: 700;
  font-size: 1rem;
  color: #344854;

  ${CardContainer}:hover & {
    opacity: 0.85;
  }
`;
