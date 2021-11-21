import firebase from 'firebase'

export default async function postUrl(data){
    firebase.firestore().collection("urls").doc(data.urlCode).set(data).then(()=>{
        return 
    })
}