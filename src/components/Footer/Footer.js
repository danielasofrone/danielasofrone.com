/* eslint-disable id-length */
/* eslint-disable camelcase */
import React, {useState} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {withNamespaces} from 'react-i18next';
import {makeStyles} from '@material-ui/core/styles';
import icon_github from '../../assets/icons/icon_github.svg';
import icon_linkedin from '../../assets/icons/icon_linkedin.svg';
import icon_email from '../../assets/icons/icon_email.svg';
import icon_flickr from '../../assets/icons/icon_flickr.svg';
import i18n from '../../i18n';
import * as S from './footer.styled';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: '0',
    [theme.breakpoints.up('sm')]: {
      margin: '5px',
    },
  },
}));

const Footer = ({t}) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const classes = useStyles();

  const changeLanguage = lng => {
    setCurrentLanguage(lng);
    i18n.changeLanguage(lng);
  };

  return (
    <S.Wrapper>
      <S.IconsContainer>
        <a
          href="https://www.linkedin.com/in/daniela-sofrone-2ab7289b/"
          target="blank"
        >
          <S.Icon src={icon_linkedin}></S.Icon>
        </a>
        <a
          href="https://github.com/danielasofrone?tab=repositories"
          target="blank"
        >
          <S.Icon src={icon_github} />
        </a>
        <a href="mailto:danielasofrone.com@gmail.com" target="blank">
          <S.Icon src={icon_email} />
        </a>
        <a href="https://www.flickr.com/photos/steepwater/" target="blank">
          <S.Icon src={icon_flickr} isSmall />
        </a>
        <FormControl className={classes.formControl}>
          <Select
            value={currentLanguage}
            onChange={evt => changeLanguage(evt.target.value)}
            displayEmpty
            inputProps={{'aria-label': 'Without label'}}
          >
            <MenuItem value={'en'}>EN</MenuItem>
            <MenuItem value={'de'}>DE</MenuItem>
          </Select>
        </FormControl>
      </S.IconsContainer>
    </S.Wrapper>
  );
};

export default withNamespaces()(Footer);
