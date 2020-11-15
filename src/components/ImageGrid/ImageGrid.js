import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import images from './images.json'
import * as S from '../Introduction/introduction.styled'

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

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <S.Wrapper >
     <S.SectionTitle isSmall>
        Visuals
      </S.SectionTitle>
      <S.Subtitle>
      I also have a passion for photography, especially portrets and landscapes.
      </S.Subtitle>
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={3}>
        {images.map((image) => (
          <GridListTile key={image.img} cols={image.cols || 1}>
            <img src={image.img} alt={image.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </S.Wrapper>
  );
}