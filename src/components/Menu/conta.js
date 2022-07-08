import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const conta = () => {
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

  return(


<div>
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
              <Avatar sx={{  width: 20, height: 20 }}>M</Avatar>
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

);
};

export default conta;
