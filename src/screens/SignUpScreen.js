import React,{useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useDispatch,useSelector} from 'react-redux'
import {addUser,addUserRequest,addUserSuccess,addUserFailure} from './../redux/user/userActions'
import Lottie from 'react-lottie';
import loadingAnimation from './../components/890-loading-animation.json'

import { Redirect } from "react-router";

const theme = createTheme();

export default function SignUp() {
    const dispatch = useDispatch()
    const [redirect,setRedirect] = useState(false)

    const addinguser = useSelector(state=>state.user.addingUser)
    const addUserPayload = useSelector(state=>state.user.addUserPayload)
    const adduserError = useSelector(state=>state.user.addUserError)


    useEffect(()=>{
        if(adduserError!=null){
          alert(adduserError)
          dispatch(addUserFailure(null))
        }
      
      },[adduserError])
      
      
      useEffect(()=>{
        if(addUserPayload=='success'){
            alert("You have been signed up successfully! Login to get started")
          setRedirect(true)
          dispatch(addUserSuccess(null))
        }
      
      },[addUserPayload])

    
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    const res={
        email: data.get('email'),
        password: data.get('password'),
        firstName:data.get('firstName'),
        lastName:data.get("lastName")
      }
      dispatch(addUser(res))
    console.log(res);

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {!addinguser?
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up to continue
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>:
        <Lottie options={{loop:true,animationData:loadingAnimation,autoplay:true,rendererSettings:{preserveAspectRatio:'xMidYMid slice'}}}
              height={400}
              width={400}/>}
      {redirect&&<Redirect to={"/login"}/>}
      </Container>
      
    </ThemeProvider>
  );
}