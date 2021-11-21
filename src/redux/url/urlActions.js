import {SHORTEN_URL_REQUEST,SHORTEN_URL_SUCCESS,SHORTEN_URL_FAILURE,
EDIT_URL_REQUEST,EDIT_URL_SUCCESS,EDIT_URL_FAILURE,
FETCH_ALL_URLS_REQUEST,FETCH_ALL_URLS_SUCCESS,FETCH_ALL_URLS_FAILURE
} from "./urlActionTypes"
import firebase from 'firebase'
export function shortenUrlRequest(data){
    return{
        type:SHORTEN_URL_REQUEST,
        payload:data
    }
}

export function shortenUrlFailure(data){
    return{
        type:SHORTEN_URL_FAILURE,
        payload:data
    }
}

export function shortenUrlSuccess(data){
    return{
        type:SHORTEN_URL_SUCCESS,
        payload:data
    }
}


export  function shortenUrl(data){
    return async (dispatch)=>{
        dispatch(shortenUrlRequest(data))
        
        if(firebase.auth().currentUser){
            var url = new URL("http://localhost:5000/urlshortner/api/shorten")
            var args = {longUrl:data.longUrl,uid:firebase.auth().currentUser.uid,email:firebase.auth().currentUser.email}
             
            Object.keys(args).forEach(key => url.searchParams.append(key, args[key]))
            
            console.log("New url",url)
            
            const options = {
                 method: 'post',
                 headers: {
                 'Accept': 'application/json',
                   'Content-Type': 'application/json',
                 }
             }
             try{

                const response = await fetch(url, options)
                  const string = await response.text();
                  const json = string === "" ? {} : JSON.parse(string);
                 console.log("json",json)
                 if(response.status==500){
                    dispatch(shortenUrlFailure("Server error"))
                }else if(response.status==401){
                    dispatch(shortenUrlFailure("Check the enetered url!"))
                }else if(response.status==201){
                     dispatch(shortenUrlFailure("Url already in use!"))
                } else if(json){
                     
                     dispatch(shortenUrlSuccess(json))
                 }
                
             }catch(error){
                 dispatch(shortenUrlFailure(error.message))
             }
        }else{
            dispatch(shortenUrlFailure("User not logged in!Log in first to generate urls."))
        }

        
        
    }

}

export function editUrlRequest(data){
    return{
        type:EDIT_URL_REQUEST,
        payload:data

    }
}
export function editUrlSuccess(data){
    return{
        type:EDIT_URL_SUCCESS,
        payload:data

    }
}

export function editUrlFailure(data){
    return{
        type:EDIT_URL_FAILURE,
        payload:data

    }
}

export  function editUrl(data){
    return async (dispatch)=>{
        dispatch(editUrlRequest(data))
        
        
        if(firebase.auth().currentUser){
            
            firebase.firestore().collection("urls").doc(data.shortCode).get().then((previousDoc)=>{
                const prevData=previousDoc.data()
                
                firebase.firestore().collection('urls').where("shortCode","==",data.newShortCode).get()
                .then((snap)=>{
                    if(snap.size==0){
                        try{
                            firebase.firestore().collection("urls").doc(data.shortCode).delete().then(()=>{
                                var finalData={
                                    countries:prevData.countries,
                                    creation_date:prevData.creation_date,
                                    creator_email:prevData.creator_email,
                                    creator_id:prevData.creator_id,
                                    expiry_date:prevData.expiry_date,
                                    longUrl:prevData.longUrl,
                                    shortUrl:"http://localhost:5000/"+data.newShortCode,
                                    urlCode:data.newShortCode,
                                    visit_counts:prevData.visit_counts
                    
                    
                                }
                                firebase.firestore().collection("urls").doc(data.newShortCode).set(finalData).then(()=>{
                                    dispatch(editUrlSuccess("success"))
                                })
                            })
                        }catch(error){
                            dispatch(editUrlFailure(error.message))
                        }
                        
                    }else{
                        dispatch(editUrlFailure("Code already taken!"))
                    }
                })
            })

            
        }   
    }

}

export function fetchAllUrlsRequest(data){
    return{
        type:FETCH_ALL_URLS_REQUEST,
        payload:data
    }
}

export function fetchAllUrlsSuccess(data){
    return{
        type:FETCH_ALL_URLS_SUCCESS,
        payload:data
    }
}

export function fetchAllUrlsFailure(data){
    return{
        type:FETCH_ALL_URLS_FAILURE,
        payload:data
    }
}

export function fetchAllUrls(data){
    return(dispatch)=>{
        dispatch(fetchAllUrlsRequest(data));
        if(firebase.auth().currentUser){
            firebase.firestore().collection("urls").where("creator_id","==",firebase.auth().currentUser.uid).get()
            .then(async (snaps)=>{
                if(snaps.size!=0){
                    var res= []
                    snaps.forEach((doc)=>{
                        res.push(doc.data())
                    })
                    console.log("Results",res)
                    dispatch(fetchAllUrlsSuccess(res))
                 
                }else{
                    dispatch(fetchAllUrlsFailure("empty"))
                }})
               
        }else{
            dispatch(fetchAllUrlsFailure("User not logged in!"))
        }
       
    }
}