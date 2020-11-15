import React from "react";
import * as S from "./projectsCard.styled";
import icon_github from '../../assets/icons/icon_github.svg'


const ProjectsCard = ({image, deploymentLink, title, description, githubLink}) => (
  <S.ServicesCardContainer>
    <a href={deploymentLink} target="blank">
    <S.ServicesCardImage src={image} alt="Card image" />
    </a>
    <S.TextContainer>
    <S.ServicesCardTitle>
    <a href={deploymentLink} target="blank">{title}</a>
   </S.ServicesCardTitle>
    <S.ServicesCardDescription>{description}
    </S.ServicesCardDescription>
    </S.TextContainer>
    <S.GithubIconContainer>
    <a href={githubLink} target="blank">
        <S.Icon src ={icon_github} />
        </a>
    </S.GithubIconContainer>
  </S.ServicesCardContainer>
);


export default ProjectsCard;