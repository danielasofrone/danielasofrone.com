import styled from 'styled-components';

export const Page = styled.main`
  background: #fff;
  color: #111;
  padding: 3.5rem 0 5rem 0;
`;

export const Container = styled.div`
  width: min(740px, calc(100% - 3rem));
  margin: 0 auto;
`;

export const TopRow = styled.div`
  margin-bottom: 2rem;

  a {
    color: #444;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 2.6rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0 0 0.75rem 0;
  font-weight: 700;
`;

export const Meta = styled.div`
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 2.5rem;
`;

export const Prose = styled.article`
  font-size: 1.125rem;
  line-height: 1.75;
  color: #222;

  p {
    margin: 1.1rem 0;
  }

  h2 {
    margin: 2.2rem 0 0.8rem 0;
    font-size: 1.5rem;
    line-height: 1.3;
    letter-spacing: -0.015em;
  }

  h3 {
    margin: 1.8rem 0 0.6rem 0;
    font-size: 1.25rem;
    line-height: 1.35;
  }

  a {
    color: inherit;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }

  ul, ol {
    padding-left: 1.25rem;
    margin: 1rem 0;
  }

  li {
    margin: 0.35rem 0;
  }

  blockquote {
    margin: 1.6rem 0;
    padding-left: 1rem;
    border-left: 3px solid rgba(0,0,0,0.15);
    color: #444;
  }

  code {
    font-size: 0.95em;
    background: rgba(0,0,0,0.05);
    padding: 0.15em 0.35em;
    border-radius: 6px;
  }

  pre {
    overflow: auto;
    background: rgba(0,0,0,0.06);
    padding: 1rem;
    border-radius: 12px;
    margin: 1.5rem 0;
  }

  img {
    width: 100%;
    border-radius: 14px;
    margin: 1.75rem 0;
    display: block;
  }

  hr {
    border: none;
    border-top: 1px solid rgba(0,0,0,0.12);
    margin: 2.5rem 0;
  }
`;
