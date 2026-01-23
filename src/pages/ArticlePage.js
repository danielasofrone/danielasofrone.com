import { useParams } from 'react-router-dom';

export default function ArticlePage() {
  const { slug } = useParams();
  return <h1>Article: {slug}</h1>;
}