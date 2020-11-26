import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import images from './images.json'
import * as S from '../Introduction/introduction.styled'
import { withNamespaces } from 'react-i18next';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "#000",
  },
  gridList: {
    width: "1200px",
  },
}));

const ImageGridList = ({t}) => {

  const classes = useStyles();

  return (
    <S.Wrapper isNarrow>
     <S.SectionTitle isSmall>
     <a id="visuals">{t('visuals')}</a> 
      </S.SectionTitle>
      <S.Subtitle>
        <p>{t('visuals.text.one')}</p>
     <a href="https://www.flickr.com/photos/steepwater" target="blank">  {t('visuals.text.two')}</a>
      </S.Subtitle>
      <a href="https://www.flickr.com/photos/steepwater" target="blank">
      <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {images.map((image) => (
          <GridListTile key={image.img} cols={image.cols || 1}>
            <img src={image.img} alt={image.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
      </a>
    </S.Wrapper>
  );
}

export default withNamespaces()(ImageGridList);