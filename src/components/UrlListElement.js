import React,{useState} from 'react'
import  {CssBaseline,Paper,InputBase,Input,TextField,Button,Grid,Link,Typography,IconButton,Box} from  "@material-ui/core"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '@mui/material/Modal';
import {Redirect} from 'react-router'
import {useDispatch,useSelector} from 'react-redux'
import EqualizerIcon from '@mui/icons-material/Equalizer';

const UrlListElement = ({creationDate,longUrl,shortUrl,uid,shortCode}) => {
    console.log("test",creationDate,longUrl,shortUrl,uid,shortCode)
    const dispatch = useDispatch()
    const [redirect,setRedirect] = useState(false)
    const createdDate = new Date(creationDate.seconds*1000)
    return (
        (!redirect)?<div style={{width:'95%'}}>
            <Paper style={{width:'98%',margin:'1vw',height:'75px',display:'flex',flexDirection:"row"}}>
               
               <Grid container >
                   <Grid container direction="column">
                        <Grid conatiner> 
                            <Typography variant="body2" color="initial" style={{marginLeft:'4vw'}}>{createdDate.toString()}</Typography>
                        </Grid>
                        <Grid conatiner> 
                            <Link href={longUrl} style={{fontSize:'20px',paddingLeft:'4vw',display:'flex',alignSelf:'center',color:"black",overflow:false}}>
                                {longUrl}
                            </Link>
                        </Grid>
                        
                   </Grid>
                   
                   <Grid container style={{backgroundColor:'whitesmoke',display:'flex'}}>
                      <Link href={shortUrl} style={{fontSize:'18px',paddingLeft:'4vw',display:'flex',alignSelf:'center'}}>
                        {shortUrl}
                      </Link>
                      
                      <Box style={{marginLeft:'5vw'}}>

                      
                      <IconButton onClick={()=>setRedirect(true)}>
                        <EditIcon/>
                      </IconButton>

                      <IconButton>
                        <DeleteIcon/>
                      </IconButton>

                        <IconButton>
                            <EqualizerIcon/>
                        </IconButton>
                        </Box>
                      
                   </Grid>
               </Grid>
               
              
                
            </Paper>
        </div>:<Redirect to={{pathname:"/editurl",state:{creationDate:creationDate,longUrl:longUrl,shortUrl:shortUrl,uid:uid,shortCode:shortCode}}}/>
    )
}

export default UrlListElement
