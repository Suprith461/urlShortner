import {SHORTEN_URL_REQUEST,SHORTEN_URL_SUCCESS,SHORTEN_URL_FAILURE,
EDIT_URL_REQUEST,EDIT_URL_SUCCESS,EDIT_URL_FAILURE,
FETCH_ALL_URLS_REQUEST,FETCH_ALL_URLS_SUCCESS,FETCH_ALL_URLS_FAILURE
} from "./urlActionTypes"

const initialState = {
    shorteningUrl:false,
    shortenUrlPayload:null,
    shortenUrlError:null,
    
    editingUrl:false,
    editUrlPayload:null,
    editUrlError:null,

    fetchingUrls:false,
    fetchUrlsPayload:null,
    fetchUrlsError:null
}

export default function urlReducer(state=initialState,action){
    switch(action.type){
        case SHORTEN_URL_REQUEST:
            return{
                ...state,
                shorteningUrl:true
            }
        case SHORTEN_URL_SUCCESS:
            return{
                ...state,
                shorteningUrl:false,
                shortenUrlPayload:action.payload
            }

        case SHORTEN_URL_FAILURE:
            return{
                ...state,
                shorteningUrl:false,
                shortenUrlError:action.payload
            }

        case EDIT_URL_REQUEST:
            return{
                ...state,
                editingUrl:true
            }

        case EDIT_URL_SUCCESS:
            return{
                ...state,
                editingUrl:false,
                editUrlPayload:action.payload
            }

        case EDIT_URL_FAILURE:
            return{
                ...state,
                editingUrl:false,
                editUrlError:action.payload
            }

        case FETCH_ALL_URLS_REQUEST:
            return{
                ...state,
                fetchingUrls:true
            }
        
        case FETCH_ALL_URLS_SUCCESS:
            return{
                ...state,
                fetchingUrls:false,
                fetchUrlsPayload:action.payload
            }
        case FETCH_ALL_URLS_FAILURE:
            return{
                ...state,
                fetchingUrls:false,
                fetchUrlsError:action.payload
            }
        
        default: return state
    }
}