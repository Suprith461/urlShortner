import React,{useState,useEffect} from 'react'
import  {CssBaseline,Paper,InputBase,Input,TextField,Button,Grid,Link} from  "@material-ui/core"
import {useDispatch,useSelector} from 'react-redux'
import {editUrl, editUrlFailure,editUrlSuccess} from './../redux/url/urlActions'
import Lottie from 'react-lottie';
import loadingAnimation from './../components/890-loading-animation.json'
import { Redirect } from "react-router";

const EditUrlScreen = (props) => {
    const {creationDate,longUrl,shortUrl,uid,shortCode} = props.location.state
    const [redirect,setRedirect] = useState(false)
    const dispatch = useDispatch()
    const editingUrl = useSelector(state=>state.url.editingUrl)
    const editUrlPayload = useSelector(state=>state.url.editUrlPayload)
    const editUrlError = useSelector(state=>state.url.editUrlError)

    useEffect(()=>{
        if(editUrlError!=null){
          alert(editUrlError)
          dispatch(editUrlFailure(null))
        }
      
      },[editUrlError])
      
      
      useEffect(()=>{
        
        if(editUrlPayload=='success'){
            console.log("Url edited successfully")
          setRedirect(true)
          dispatch(dispatch(editUrlSuccess(null)))
        }
      
      },[editUrlPayload])
    
    
    
    console.log("editUrlScreen",creationDate,longUrl,shortUrl,uid,shortCode)

    function handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const newCode = data.get("newCode")
        console.log("New Code",newCode)
        dispatch(editUrl({newShortCode:newCode,shortCode:shortCode}))



    }
    return (
        <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
            {(!editingUrl)?<Paper style={{width:'98%',margin:'1vw',height:'125px',display:'flex',flexDirection:"row"}}>
               
               <Grid container >
                   <Grid container component="form" onSubmit={handleSubmit}>
                        <Grid item  xs={12} lg={10} md={10} style={{display:'flex',alignItems:'center',justifyContent:"center"}}>
                            <TextField
                                required
                                id="newCode"
                                label="Enter custom url code"
                                name="newCode"
                                autoFocus
                                variant="outlined"
                                style={{width:'75vw'}}
                                inputProps={{ maxLength: 10 }}
                            />
                        </Grid>

                        <Grid item xs={12} lg={2} md={2} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <Button variant="contained" color="default"  type='submit' disabled={editingUrl}>
                            {"Edit Url"}
                            </Button>
                        </Grid>
                        
                        
                        
                   </Grid>
                   
                   <Grid container style={{backgroundColor:'whitesmoke'}}>
                      <Link href={shortUrl} style={{fontSize:'18px',paddingLeft:'4vw',display:'flex',alignSelf:'center'}}>
                        {shortUrl}
                      </Link>
                   </Grid>
               </Grid>
               
               
                
            </Paper>:<Lottie options={{loop:true,animationData:loadingAnimation,autoplay:true,rendererSettings:{preserveAspectRatio:'xMidYMid slice'}}}
              height={400}
              width={400}/>}
      {redirect&&<Redirect to={"/dashboard"}/>}
        </div>
    )
}

export default EditUrlScreen
