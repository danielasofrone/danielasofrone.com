import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { featuredContent } from '../content/content';
import * as S from './articlePage.styled';

export default function ArticlePage() {
  const { slug } = useParams();
  const article = featuredContent.find((a) => a.slug === slug);

  const [body, setBody] = useState('');

  useEffect(() => {
    if (!article?.bodyUrl) return;

    fetch(article.bodyUrl)
      .then((res) => res.text())
      .then(setBody)
      .catch(() => setBody(''));
  }, [article]);

  if (!article) {
    return (
      <S.Page>
        <S.Container>
          <h1>Not found</h1>
          <Link to="/">← Back home</Link>
        </S.Container>
      </S.Page>
    );
  }

  return (
    <S.Page>
      <S.Container>
        <S.TopRow>
          <Link to="/">← Home</Link>
        </S.TopRow>

        <S.Title>{article.title}</S.Title>
        <S.Meta>
          {article.date} · {article.readTime}
        </S.Meta>

        <S.Prose>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {body}
          </ReactMarkdown>
        </S.Prose>
      </S.Container>
    </S.Page>
  );
}
