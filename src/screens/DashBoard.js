import React,{useState,useEffect} from 'react'
import { styled, alpha } from '@mui/material/styles';
import  {CssBaseline,Paper,InputBase,Input,TextField,Button,Grid,Link,List,ListItem} from  "@material-ui/core"
import DashBoardAppBar from './../components/DashBoardAppBar'
import CreateShortUrl from './../components/CreateShortUrl'
import UrlListElement from './../components/UrlListElement'
import {fetchAllUrls} from './../redux/url/urlActions'
import {useDispatch,useSelector} from 'react-redux'
const DashBoard = () => {
    const dispatch = useDispatch()
    const [searchBarFocused,setSearchBarFocused] = useState(false)
    const fetchUrlsPayload = useSelector(state=>state.url.fetchUrlsPayload)
    const fetchingUrls = useSelector(state=>state.url.fetchingUrls)
    const fetchUrlsError = useSelector(state=>state.url.fetchUrlsError)


    const [allUrls,setAllUrls] = useState([{}]);
    
    useEffect(()=>{
        dispatch(fetchAllUrls())
    },[])

    useEffect(()=>{
        if(fetchUrlsPayload){
            setAllUrls(fetchAllUrls)
        }
    },[fetchUrlsPayload])
  
    return (
        <div>
            <CssBaseline/>
            <DashBoardAppBar setFocus={setSearchBarFocused} focus={searchBarFocused}/>
            {(!searchBarFocused) && <CreateShortUrl/>}
            {/* <UrlListElement shortUrl={"http://localhost:5000/1249f9"} longUrl={"https://console.firebase.google.com/u/0/project/urlshortner-65dd0/firestore/data/~2Furls~2Ffb3ee5"} creationDate={"11/21/2021"} uid={"8lEwCkr01ofzRTRK2oVQUAT2MRf2"} shortCode={"1249f9"}/> */}

            {(fetchUrlsPayload)?
            <List>
                {fetchUrlsPayload.map((value,index)=>(
                    <ListItem style={{width:'95vw'}}>
                     <UrlListElement shortUrl={value.shortUrl} longUrl={value.longUrl} creationDate={value.creation_date} uid={value.creator_id} shortCode={value.urlCode}/>
                     </ListItem>
               ))}
            </List>:null
            }
            
            
        </div>
    )
}

export default DashBoard
