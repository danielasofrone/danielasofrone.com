import React, { useState, useEffect } from 'react'
import NavBar from '../NavBar/NavBar'
import * as S from './projects.styled'
import axios from "axios";
import Repository from '../Repository/Repository'

const Projects = ()  => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepo = async () => {
      const response = await axios.get(
        "https://api.github.com/users/danielasofrone/repos"
      );
      setRepos(response.data);
      setLoading(false);
    };
    fetchRepo();
  }, []);

  return (
    <S.Wrapper>
      <NavBar/>
      <S.PageTitle>
        Some of my Github projects:
      </S.PageTitle>
      {loading ? (
 <S.LoadingContainer>
 <S.Loading>
   <h2>Loading...</h2>
 </S.Loading>
</S.LoadingContainer>
) : (
<div>
 {repos.map((repo, id) => (
 <Repository
    key={id}
    html_url={repo.html_url}
    name={repo.name}
    description={repo.description}
    deploymentLink={repo.homepage}
/>
 ))}
</div>
)}
    </S.Wrapper>
  )
}

export default Projects