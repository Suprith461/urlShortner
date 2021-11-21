import React,{useState,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {Button} from '@material-ui/core'
import Link from '@mui/material/Link';
export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [mobileScreen,setMobileScreen] = useState(false)
   const width = window.innerWidth
  
   useEffect(()=>{
    if(width<400){
      setMobileScreen(true)
    }
   },[width])

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{margin:0 ,width:'100%'}}>
      <AppBar position="static">
        <Toolbar variant="regular" >
          
          <Typography variant="h6" color="inherit" component="div">
            Url Shortner
          </Typography>

          {!mobileScreen&&<Box style={{display:'flex',alignItems:'flex-end',marginLeft:"60vw",border:'1px solid white',padding:"3px",paddingLeft:'5px',paddingRight:'5px',marginRadius:'3px'}}>
           
                <Link href="/login" variant="body2" style={{color:"white",fontSize:16,fontWeight:"500" , "&:hover":{textDecoration:null,color:'red'}}} >
                   {"Log In"}
                </Link>
           
            
          </Box>}

          {!mobileScreen&&<Box style={{display:'flex',alignItems:'flex-end',marginLeft:"1vw",border:'1px solid white',padding:"3px",paddingLeft:'5px',paddingRight:'5px',marginRadius:'3px'}}>
           
                <Link href="/signup" variant="body2" style={{color:"white",fontSize:16,fontWeight:"500" , "&:hover":{textDecoration:null,color:'red'}}} >
                   {"Sign Up"}
                </Link>
           
            
          </Box>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
