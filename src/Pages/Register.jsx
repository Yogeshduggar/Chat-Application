import React, { useState } from "react";
import ADD from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
 
export const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

 
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
 
    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
 
      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);
 
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
 
            // create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
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
