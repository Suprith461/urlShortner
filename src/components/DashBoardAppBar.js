import React,{useState,useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import {Link} from '@material-ui/core'
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function DashBoardAppBar({focus,setFocus}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    var innerWidth =  window.innerWidth

    const [personIcon,setPersonIcon]= useState(false)

    useEffect(()=>{
        if(innerWidth<400){
            setPersonIcon(false)
        }else{
            setPersonIcon(true)
        }
    },[innerWidth])
  

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  
  
  

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{display:'flex',flexDirection:'row'}}>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
           URL Shortner
          </Typography>
          <Search style={{display:'flex',flexDirection:"row"}}>
            <IconButton style={{marginLeft:'10px'}}>
                <SearchIconWrapper>
                    <SearchIcon style={{color:'white'}}/>
              
                </SearchIconWrapper>
            </IconButton>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              style={{width:"70vw"}}
              onFocus={()=>{console.log("focused");setFocus(true)}}
              onBlur={()=>{setFocus(false)}}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          
          
          {personIcon&&<Box style={{border:'0.8px solid white',padding:'0.2vw',display:'flex',flexDirection:'row'}}>
            <PersonIcon/>
            <Typography variant="body2" color="initial" style={{color:'white'}}>Suprith Hattikal</Typography>
          </Box>}
          
          <IconButton >
              <LogoutIcon style={{color:'white'}} />
          </IconButton>
          
        </Toolbar>
      </AppBar>
      
    </Box>
  );
}
