import {SIGNUP_USER_REQUEST,SIGNUP_USER_FAILURE,SIGNUP_USER_SUCCESS
    ,LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,LOGIN_USER_FAILURE} from './userActionTypes'
    
    const initialState={
        addingUser:false,
        addUserPayload:null,
        addUserError:null,

        loggingInUser:false,
        loginUserPayload:null,
        loginUserError:null
    
    
    }

export default function userReducer(state=initialState,action){
    switch(action.type){
        case SIGNUP_USER_REQUEST:
            return{
                ...state,
                addingUser:true
            }

        case SIGNUP_USER_SUCCESS:
            return{
                ...state,
                addingUser:false,
                addUserPayload:action.payload
            }

        case SIGNUP_USER_FAILURE:
            return{
                ...state,
                addingUser:false,
                addUserError:action.payload
            }

        case LOGIN_USER_REQUEST:
            return{
                ...state,
                loggingInUser:true
            }

        case LOGIN_USER_SUCCESS:
            return{
                ...state,
                loggingInUser:false,
                loginUserPayload:action.payload
                }
        case LOGIN_USER_FAILURE:
            return{
                ...state,
                loggingInUser:false,
                loginUserError:action.payload
            }
        default:return state
    }
}