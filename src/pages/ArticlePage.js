import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { featuredContent } from '../content/content';
import * as S from './articlePage.styled';

function ArticlePage({ t }) {
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

  const title = t(`articles.${slug}.title`, { defaultValue: slug });
  const excerpt = t(`articles.${slug}.excerpt`, { defaultValue: '' });

  return (
    <S.Page>
      <S.Container>
        <S.TopRow>
          <Link to="/">← Home</Link>
        </S.TopRow>

        <S.Title>{title}</S.Title>

        {excerpt ? <S.Excerpt>{excerpt}</S.Excerpt> : null}

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

export default withNamespaces()(ArticlePage);
