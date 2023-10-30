import React from 'react'
import "./style.scss"
import ADD from "../img/addAvatar.png"
export const Register = () => {
  return (
    <div className="form-container">
        <div className="formWrapper">
            <span className="logo">OnlyChat</span>
            <span className="title">Register</span>

                <form action="">
                    <input type="text" placeholder='Username' />
                    <input type="email" placeholder='Email' />
                    <input type="password" name="" id="" placeholder='Password'/>
                    <input  style={{display:"none"}} type="file" name="" id="file" />
                    <label htmlFor="file">
                        <img src={ADD} alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <button>Sign Up</button>
                </form>
                <span>Do you have account? Login</span>
        </div>
    </div>
  )
}
