import React from 'react';
import {withNamespaces} from 'react-i18next';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import * as S from './navbar.styled';

const Navbar = ({t}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <S.NavbarWrapper>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <S.BurgerMenu>
          <MenuIcon
            style={{color: ' #fff'}}
            fontSize="large"
            onClick={handleClick}
          />
        </S.BurgerMenu>
      </IconButton>
      <ThemeProvider theme={darkTheme}>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: '20ch',
              height: '25ch',
            },
          }}
        >
          <S.BurgerMenuItem>
            <MenuItem onClick={handleClose}>
              <a href="#about"> {t('about')}</a>
            </MenuItem>
          </S.BurgerMenuItem>
          <S.BurgerMenuItem>
            <MenuItem onClick={handleClose}>
              <a href="#projects">{t('selected.projects.title')}</a>
            </MenuItem>
          </S.BurgerMenuItem>
          <S.BurgerMenuItem>
            <MenuItem onClick={handleClose}>
              <a href="#visuals">{t('visuals')}</a>
            </MenuItem>
          </S.BurgerMenuItem>
          <S.BurgerMenuItem>
            <MenuItem onClick={handleClose}>
              <a href="#contact">{t('contact.form.title')}</a>
            </MenuItem>
          </S.BurgerMenuItem>
        </Menu>
      </ThemeProvider>

      <S.NavbarItem>
        <a href="#about"> {t('about')}</a>
      </S.NavbarItem>
      <S.NavbarItem>
        <a href="#projects">{t('selected.projects.title')}</a>
      </S.NavbarItem>
      <S.NavbarItem>
        <a href="#visuals">{t('visuals')}</a>
      </S.NavbarItem>
      <S.NavbarItem>
        <a href="#contact">{t('contact.form.title')}</a>
      </S.NavbarItem>
    </S.NavbarWrapper>
  );
};

export default withNamespaces()(Navbar);
