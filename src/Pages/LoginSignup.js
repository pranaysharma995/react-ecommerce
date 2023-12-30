import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function LoginSignup () {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: ''
  })
  const navigate = useNavigate()

  const validateForm = (ele, all) => {
    let status = true
    if (all) {
      setErrors({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
      })
    }
    if(ele)
    {
      setErrors((prev) => ({...prev,[ele]:''}));
      console.log(errors);
    }
    if (all && firstName.length === 0 || ele === "firstName" && firstName.length === 0) {
      setErrors(prev => ({ ...prev, firstName: 'Firstname is required' }))
      status = false;
      console.log(errors);
    }
    if (all && lastName.length === 0 || ele === "lastName" && lastName.length === 0) {
      setErrors(prev => ({ ...prev, lastName: 'Lastname is required' }))
      status = false
    }
    if (all && email.length === 0 || ele === "email" && email.length === 0) {
      setErrors(prev => ({ ...prev, email: 'Email is required' }))
      status = false
    }
    if (all && email.length > 0 || ele === "email" && email.length > 0) {
      if (!email.includes('@')) {
        status = false
        setErrors(prev => ({ ...prev, email: 'Invalid email' }))
      }
    }
    if (all && phone.length === 0 || ele === "phone" && phone.length === 0) {
      setErrors(prev => ({ ...prev, phone: 'phone is required' }))
      status = false
    }
    if (all && password.length === 0 || ele === "password" && password.length === 0) {
      status = false
      setErrors(prev => ({ ...prev, password: 'Password is required' }))
    }

    return status
  }

  const handleSubmit = () => {
    if (validateForm(null,'all')) {
      const obj = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        password: password
      }

      axios
        .post('http://localhost:7000/user/', obj)
        .then(data => {
          if (data) {
            console.log(data)
            navigate('/login')
          }
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  }
  return (
    <div className='login-signup'>
      <div className='login-signup-container'>
        <h1>SignUp</h1>
        <div className='login-signup-fields'>
          <form name='signup-form'>
            <div className='input-container'>
              <input
                type='text'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                name='firstName'
                placeholder='firstname'
                onKeyUp={(event) => {validateForm(event.target.name)}}
              />
              {errors.firstName.length > 0 ? (
                <span className='error-msg'>{errors.firstName}</span>
              ) : (
                ''
              )}
            </div>
            <div className='input-container'>
              <input
                type='text'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                name='lastName'
                placeholder='lastName'
                onKeyUp={(event) => {validateForm(event.target.name)}}
              />
              {errors.lastName.length > 0 ? (
                <span className='error-msg'>{errors.lastName}</span>
              ) : (
                ''
              )}
            </div>
            <div className='input-container'>
              <input
                type='text'
                value={phone}
                onChange={e => setPhone(e.target.value)}
                name='phone'
                placeholder='phone'
                onKeyUp={(event) => {validateForm(event.target.name)}}
              />
              {errors.phone.length > 0 ? (
                <span className='error-msg'>{errors.phone}</span>
              ) : (
                ''
              )}
            </div>
            <div className='input-container'>
              <input
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                name='email'
                placeholder='Email'
                onKeyUp={(event) => {validateForm(event.target.name)}}
              />
              {errors.email.length > 0 ? (
                <span className='error-msg'>{errors.email}</span>
              ) : (
                ''
              )}
            </div>
            <div className='input-container'>
              <input
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                name='password'
                placeholder='password'
                onKeyUp={(event) => {validateForm(event.target.name)}}
              />
              {errors.password.length > 0 ? (
                <span className='error-msg'>{errors.password}</span>
              ) : (
                ''
              )}
            </div>
            <button onClick={handleSubmit} type='button'>
              Countinue
            </button>
            <p className='login-signup-login'>
              Alaready have a account ?
              <span>
                <Link to='/login'>Login here</Link>
              </span>
            </p>
          </form>
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
