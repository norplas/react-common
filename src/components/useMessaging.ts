import firebase from 'firebase/app'
import 'firebase/database' 

import {useState,useEffect} from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyAltmRIwRAjMOuiVHGFVDFTNsboSZAdPIk",
    authDomain: "norplas-help-desk.firebaseapp.com",
    projectId: "norplas-help-desk",
    storageBucket: "norplas-help-desk.appspot.com",
    messagingSenderId: "191851579580",
    appId: "1:191851579580:web:67cf9d3876536d98c528b9",
    measurementId: "G-DTVK4QVQ23"
  };
 const app=  firebase.initializeApp(firebaseConfig)
 
const db = firebase.database(app);

 
export type  MessagingType = {
    messages:any[],
    addMessage:(value:any)=>{}
}

export const useMessaging=(name:string,user:string)=>{


    const [messages,setMessages]= useState<any[]>([]);
   
    useEffect(()=>{
        const handleChildAdded=(snapshot:any) =>{
            const val = snapshot.val();

            setMessages(arr =>[...arr,val]); 
        }
        const ref= firebase.database().ref(`${name}/${user}/`);
        if(user.length!==0)
      {
       

        ref.on('child_added',handleChildAdded);
      }
        return () =>{
            ref.off('child_added')

        }
    },[name,user]);

    const addMessage =  (payload:any) => {

        const listRef = firebase.database().ref(name).child(user);

        const ref = listRef.push();

        ref.set(payload)

    
         
    }


    return { messages,addMessage}
}
 
export default useMessaging