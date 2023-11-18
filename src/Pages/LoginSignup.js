import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function LoginSignup () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleSubmit=() =>
  {
    const obj={
        firstName:firstName,
        lastName:lastName,
        email:email,
        phone:phone,
        password:password
    }

    axios.post("http://localhost:7000/user/",obj)
    .then((data) =>
    {
        if(data)
        {
        console.log(data);
        navigate('/login');
        }
    })
    .catch((err) =>
    {
        console.log(err.response.data)
    })

  }
  return (
    <div className='login-signup'>
      <div className='login-signup-container'>
        <h1>SignUp</h1>
        <div className='login-signup-fields'>
          <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} name='firstName' placeholder='firstname' />
          <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} name='lastName' placeholder='lastName' />
          <input type='text' value={phone} onChange={(e) => setPhone(e.target.value)} name='phone' placeholder='phone' />
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Email' />
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='password' />
          <button onClick={handleSubmit} type='button'>Countinue</button>
          <p className='login-signup-login'>
            Alaready have a account ?
            <span>
              <Link to='/login'>Login here</Link>
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

export default LoginSignup
