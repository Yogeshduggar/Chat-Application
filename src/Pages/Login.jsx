import React from 'react'
import "./style.scss"
export const Login = () => {
  return (   
        <div className="form-container">
            <div className="formWrapper">
                <span className="logo">OnlyChat</span>
                <span className="title">Login</span>
    
                    <form action="">
                        
                        <input type="email" placeholder='Email' />
                        <input type="password" name="" id="" placeholder='Password'/>
                        
                        <button>Sign In</button>
                    </form>
                    <span>Do you have account? Register</span>
            </div>
        </div>
      )
    }