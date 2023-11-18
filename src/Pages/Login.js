import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleSubmit = e => {
    const obj={
        email:email,
        password:password
    }

    axios.post("http://localhost:7000/user/login",obj)
    .then((data) =>
    {
        if(data)
        {
            console.log(data);
            navigate("/shop");

        }
    })
    .catch((err) =>
    {
        console.log(err);
    })
  }
  return (
    <div className='login-signup'>
      <div className='login-signup-container'>
        <h1>Login</h1>
        <div className='login-signup-fields'>
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            name='email'
            placeholder='Email'
          />
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            name='password'
            placeholder='password'
          />
          <button type='button' onClick={handleSubmit}>Countinue</button>
          <p className='login-signup-login'>
            New user ?{' '}
            <span>
              <Link to='/signup'>Signup here</Link>
            </span>
          </p>
        </div>
        <div className='login-signup-agree'>
          <input type='checkbox' name='agree' />
          <p>By countinuing i agree to terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Login
