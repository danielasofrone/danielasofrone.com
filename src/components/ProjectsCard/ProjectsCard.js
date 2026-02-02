import React from 'react';
import PropTypes from 'prop-types';
import icon_github from '../../assets/icons/icon_github.svg';
import * as S from './projectsCard.styled';

const ProjectsCard = ({
  image,
  deploymentLink,
  title,
  description,
  githubLink,
  noGithub,
}) => (
  <S.ServicesCardContainer
    role="link"
    tabIndex={0}
    onClick={() => window.open(deploymentLink, '_blank', 'noopener,noreferrer')}
    onKeyDown={(e) => {
      if (e.key === 'Enter') {
        window.open(deploymentLink, '_blank', 'noopener,noreferrer');
      }
    }}
  >
    <S.ServicesCardImage src={image} alt={`${title} preview`} />

    <S.TextContainer>
      <S.ServicesCardTitle>{title}</S.ServicesCardTitle>
      <S.ServicesCardDescription>{description}</S.ServicesCardDescription>
    </S.TextContainer>

    <S.GithubIconContainer
      noGithub={noGithub}
      onClick={(e) => e.stopPropagation()} // IMPORTANT
    >
      {!noGithub && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <S.Icon src={icon_github} alt="GitHub" />
        </a>
      )}
    </S.GithubIconContainer>
  </S.ServicesCardContainer>
);

ProjectsCard.propTypes = {
  image: PropTypes.string,
  deploymentLink: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  noGithub: PropTypes.bool,
};

export default ProjectsCard;
