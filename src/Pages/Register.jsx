import React, { useState } from 'react'
import "./style.scss"
import ADD from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../Firebase";
import { doc, setDoc } from "firebase/firestore"; 

export const Register = () => {
  const [err,setErr]=useState(false)
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const displayName= e.target[0].value;
    const email= e.target[1].value;
    const password= e.target[2].value;
    const file= e.target[3].files[0];
    
    try{
    const res= await createUserWithEmailAndPassword(auth, email, password);
    const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on('state_changed',  
  (error) => {
    setErr(true)
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {

      await updateProfile(res.user, {
        displayName,
        photoURL: downloadURL,
        });

        await setDoc(doc(db, "users", res.user.uid), {
          uid: res.user.uid,
          displayName,
          email,
          photoURL: downloadURL,
        });

          });
        }
      );
     
    }
    catch(err){
      setErr(true);
    }
  }
  return (
    <div className="form-container">
        <div className="formWrapper">
            <span className="logo">OnlyChats</span>
            <span className="title">Register</span>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Username' />
                    <input type="email" placeholder='Email' />
                    <input type="password" name="" id="" placeholder='Password'/>
                    <input  style={{display:"none"}} type="file" name="" id="file" />
                    <label htmlFor="file">
                        <img src={ADD} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <span>Do you have account? Login</span>
        </div>
    </div>
  )
}
