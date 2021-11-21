import React from 'react'
import  {CssBaseline,Paper,InputBase,Input,TextField,Button,Grid,Link} from  "@material-ui/core"
import {shortenUrlRequest,shortenUrlSuccess,shortenUrlFailure,shortenUrl} from './../redux/url/urlActions'
import {useDispatch,useSelector} from 'react-redux'
const CreateShortUrl = () => {
    const dispatch = useDispatch();
    const shorteningUrl = useSelector(state=>state.url.shorteningUrl);
    const shortenUrlPayload = useSelector(state=>state.url.shortenUrlPayload);
    const shortenUrlError = useSelector(state=>state.url.shortenUrlError);

    console.log(shorteningUrl,shortenUrlPayload,shortenUrlError)
    function handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const longUrl=data.get('newLongUrl')
        console.log("Long url from createshorturl comp",longUrl)
        dispatch(shortenUrl({longUrl:longUrl}))
    }
    return (
        <div>
            <Paper style={{width:'98%',margin:'1vw',height:'125px',display:'flex',flexDirection:"row"}}>
               
               <Grid container >
                   <Grid container component="form" onSubmit={handleSubmit}>
                        <Grid item xs={12} lg={10} md={10} style={{display:'flex',alignItems:'center',justifyContent:"center"}}>
                            <TextField
                               
                                required
                                id="newLongUrl"
                                label="Enter long url"
                                name="newLongUrl"
                                autoFocus
                                variant="outlined"
                                style={{width:'75vw'}}
                            />
                        </Grid>

                        <Grid item xs={12} lg={2} md={2} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                            <Button variant="contained" color="default" type="submit" disabled={shorteningUrl}>
                            {"Shorten Url"}
                            </Button>
                        </Grid>
                        
                        
                        
                   </Grid>
                   
                   <Grid container style={{backgroundColor:'whitesmoke'}}>
                      <Link href={(shortenUrlPayload)?shortenUrlPayload.shortUrl:""} style={{fontSize:'18px',paddingLeft:'4vw',display:'flex',alignSelf:'center'}}>
                        {(shortenUrlPayload)?shortenUrlPayload.shortUrl:""}
                      </Link>
                   </Grid>
               </Grid>
               
               
                
            </Paper>
        </div>
    )
}

export default CreateShortUrl
