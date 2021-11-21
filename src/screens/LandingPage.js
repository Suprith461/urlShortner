import React from 'react'
import {Typography,Grid,Paper,Box,Link} from '@material-ui/core'
import MenuAppBar from './../components/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline';

const LandingPage = () => {
    return (
        <div style={{display:'flex',flex:1,flexDirection:"column"}}>
            <CssBaseline/>
            <MenuAppBar />
            <Grid container direction="row">
                <Grid xs={12} md={7} lg={7} style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
                    <Box style={{backgroundColor:'white'}}>
                        <Typography variant="h2" color="initial" style={{fontWeight:'700'}}>Shorten any link,for free</Typography>
                        <Typography variant="h5"  style={{fontWeight:'500',color:'#63605f'}}>Simple,Fast and Powerful tools to analyze link clicks</Typography>
                        
                        <Box style={{backgroundColor:"#148fc4",height:'50px',width:'225px',display:'flex',justifyContent:"center",alignItems:'center',marginTop:'25px'}}>
                            <Link href="/login" style={{color:'white',fontSize:18}}>{"Get Started for Free"}</Link>
                        </Box>
                        
                    </Box>
                </Grid>
                <Grid xs={12} md={5} lg={5} >
                    <img
                        src={"./images/shortlinksvectorillustration.png"}
                        style={{width:'100%',height:"100%"}}
                    />
                </Grid>
                
                
            </Grid>
            
        </div>
    )
}

export default LandingPage
