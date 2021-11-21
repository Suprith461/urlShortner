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
import {logInUserRequest,logInUserSuccess,logInUserFailure,logIn} from './../redux/user/userActions'
import Lottie from 'react-lottie';
import loadingAnimation from './../components/890-loading-animation.json'
import {useDispatch,useSelector} from 'react-redux'
import { Redirect } from "react-router";



const theme = createTheme();

export default function SignIn() {
    const dispatch = useDispatch()
    const [redirect,setRedirect] = useState(false)
    
    const loggingIn = useSelector(state=>state.user.loggingInUser)
    const logInUserPayload = useSelector(state=>state.user.loginUserPayload)
    const logInUserError = useSelector(state=>state.user.loginUserError)

    console.log("Watch",loggingIn,logInUserPayload,logInUserError)

    useEffect(()=>{
        if(logInUserError!=null){
          alert(logInUserError)
          dispatch(logInUserFailure(null))
        }
      
      },[logInUserError])
      
      
      useEffect(()=>{
        
        if(logInUserPayload=='success'){
            console.log("successfull login")
          setRedirect(true)
          dispatch(logInUserSuccess(null))
        }
      
      },[logInUserPayload])

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const res = {
        email: data.get('email'),
        password: data.get('password'),
      }
    dispatch(logIn(res))
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {!loggingIn?
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
            Sign in to continue
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
           
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>:<Lottie options={{loop:true,animationData:loadingAnimation,autoplay:true,rendererSettings:{preserveAspectRatio:'xMidYMid slice'}}}
              height={400}
              width={400}/>}
      {redirect&&<Redirect to={"/dashboard"}/>}
       
      </Container>
    </ThemeProvider>
  )};
