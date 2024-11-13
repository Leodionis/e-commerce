import React from 'react'
import './CSS/Login.css'

export const Login = () => {
    return (
      <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='password' />
          </div>
          <button>Continue</button>
          <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
        </div>
      </div>
    )
  }
export default Login