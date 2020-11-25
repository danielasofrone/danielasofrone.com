import React from 'react'
import * as S from './footer.styled'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import icon_github from '../../assets/icons/icon_github.svg'
import icon_linkedin from '../../assets/icons/icon_linkedin.svg'
import icon_email from '../../assets/icons/icon_email.svg'
import icon_flickr from '../../assets/icons/icon_flickr.svg'
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  formControl: {
    margin: "5px",
  },
}));

const Footer = ({t})  => {
  const classes = useStyles();
  // const [language, setLanguage] = React.useState('');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  // const handleChange = (event) => {
  //   setLanguage(event.target.value);
  // };

  return (
    <S.Wrapper>
      <S.IconsContainer>
        <a href="https://www.linkedin.com/in/daniela-sofrone-2ab7289b/" target="blank">
        <S.Icon src ={icon_linkedin}>
        </S.Icon>
        </a>
        <a href="https://github.com/danielasofrone?tab=repositories" target="blank">
        <S.Icon src ={icon_github} />
        </a>
        <a href="mailto:danielasofrone.com@gmail.com" target="blank">
        <S.Icon src ={icon_email} />
        </a>
        <a href="https://www.flickr.com/photos/steepwater/" target="blank">
        <S.Icon src ={icon_flickr} isSmall/>
        </a>
        <FormControl className={classes.formControl}>
        <Select
          onChange={() => changeLanguage('de')}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <>EN</>
          </MenuItem>
          <MenuItem value={20}>DE</MenuItem>
        </Select>
      </FormControl>
      </S.IconsContainer>
    </S.Wrapper>
  )
}

export default withNamespaces()(Footer);

