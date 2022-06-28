import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { signout } = useAuth();
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Nav>
        <NavLink to='/home'>
          <img style={{marginLeft: '-100px',}} src="https://consultmidia.it/wp-content/uploads/2020/03/logo-oficial-4_7b80b499131f90466212f091336eca30.png" alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            Inicio
          </NavLink>
          <NavLink to='/services' activeStyle>
            Quem Somos
          </NavLink>
          <NavLink to='/services' activeStyle>
            Soluções
          </NavLink>
          <NavLink to='/services' activeStyle>
            Serviços
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
           Clientes
          </NavLink>
          <NavLink to='/Perfil' activeStyle>
            Contatos
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <div>
        <p >Bem vindo </p>
        <Box>  
          <Tooltip title="Conta">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{  width: 40, height: 40 }}>M</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}

            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem  onClick={() => [navigate("../Perfil")]}>
              <Avatar /> Perfil
            </MenuItem>
            <MenuItem onClick={() => [navigate("../Perfil")]}>
              <Avatar /> Minha Conta
            </MenuItem >
            <Divider /> 
            <MenuItem id="sair" onClick={() => [signout(), navigate("/")]} >
              Sair
            </MenuItem >
          
          </Menu>
        </div>
          
      </Nav>
    </>
  );
};

export default Navbar;