import firebase from 'firebase'
import 'firebase/firestore'

export default async function getLongUrl(data){
    const shortenedCode = data.code
    const dataBasePath = firebase.firestore().collection('urls')

    try{
        dataBasePath.get(shortenedCode).then((doc)=>{
            return doc.data().longUrl
        })
    }catch(error){
        console.log(error)
        return null
    }
    
    
}