import {SIGNUP_USER_REQUEST,SIGNUP_USER_FAILURE,SIGNUP_USER_SUCCESS
,LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,LOGIN_USER_FAILURE
} from './userActionTypes'

import firebase from 'firebase'


export function addUserRequest(data){
    return{
        type:SIGNUP_USER_REQUEST,
        payload:data
    }
}

export function addUserSuccess(data){
    return{
        type:SIGNUP_USER_SUCCESS,
        payload:data
    }
}

export function addUserFailure(data){
    return{
        type:SIGNUP_USER_FAILURE,
        payload:data
    }
}

export function addUser(data){
    return(dispatch)=>{
        dispatch(addUserRequest(data));

        try{
            firebase.auth().createUserWithEmailAndPassword(data.email,data.password).then((user)=>{
                user.user.updateProfile({displayName:data.firstName+" "+data.lastName}).then(()=>{
                    dispatch(addUserSuccess("success"))
                })
            })
        }catch(error){
            dispatch(addUserFailure(error.message))
        }
        
    }

}

export function logInUserRequest(data){
    return{
        type:LOGIN_USER_REQUEST,
        payload:data
    }
}

export function logInUserSuccess(data){
    return{
        type:LOGIN_USER_SUCCESS,
        payload:data
    }
}

export function logInUserFailure(data){
    return{
        type:LOGIN_USER_FAILURE,
        payload:data
    }
}

export function logIn(data){
    return(dispatch)=>{
        dispatch(logInUserRequest(data))
        firebase.auth().signInWithEmailAndPassword(data.email,data.password).then((user)=>{
            dispatch(logInUserSuccess("success"))
        }).catch((error)=>{
            dispatch(logInUserFailure(error.message))
        })
    }
}