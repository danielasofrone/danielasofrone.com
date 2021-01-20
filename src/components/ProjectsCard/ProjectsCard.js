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
  <S.ServicesCardContainer>
    <a href={deploymentLink} target="blank">
      <S.ServicesCardImage src={image} alt="Card image" />
    </a>
    <S.TextContainer>
      <S.ServicesCardTitle>
        <a href={deploymentLink} target="blank">
          {title}
        </a>
      </S.ServicesCardTitle>
      <S.ServicesCardDescription>{description}</S.ServicesCardDescription>
    </S.TextContainer>
    <S.GithubIconContainer noGithub={noGithub}>
      <a href={githubLink} target="blank">
        <S.Icon src={icon_github} />
      </a>
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
