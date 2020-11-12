import React from "react";
import * as S from "./repository.styled";
import PropTypes from "prop-types";

const Repository = ({ html_url, name, description, deploymentLink }) => {

  return (
    <>
      <S.RepoContainer>
        <S.RepoTitle>
          <S.RepoName>
            <a href={html_url} target="blank">{name}</a>
          </S.RepoName>
        </S.RepoTitle>
        <S.DescriptionContainer>
          <S.RepoDescription>{description}</S.RepoDescription>
        </S.DescriptionContainer>
        <S.DeploymentLink> <a href={deploymentLink} target="blank">
          {deploymentLink}
          </a></S.DeploymentLink>
      </S.RepoContainer>
    </>
  );
};
Repository.propTypes = {
  html_url: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  deploymentLink: PropTypes.string,
};
export default Repository;