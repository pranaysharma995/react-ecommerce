import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import cartIcon from '../Assets/cart_icon.png'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar () {
  const [menu, setMenu] = useState(window.location.pathname)
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link to='/'>
          <img src={logo} alt='Logo' />
          <p>Shopper</p>
        </Link>
      </div>
      <ul className='nav-menu'>
        <li
          onClick={() => {
            setMenu('shop')
          }}
        >
          <NavLink to='/'> Shop</NavLink> {menu === 'shop' || menu.includes('shop') ? <hr /> : ''}
        </li>
        <li
          onClick={() => {
            setMenu('men')
          }}
        >
          <NavLink to='/men'>Men</NavLink>{' '}
          {(menu === 'men' || menu.includes('men')) && !menu.includes('women') ? <hr /> : ''}
        </li>
        <li
          onClick={() => {
            setMenu('women')
          }}
        >
          <NavLink to='/women'>Women</NavLink>{' '}
          {menu === 'women' || menu.includes('women') ? <hr /> : ''}
        </li>
        <li
          onClick={() => {
            setMenu('kids')
          }}
        >
          <NavLink to='/kids'>Kids</NavLink>{' '}
          {menu === 'kids' || menu.includes('kids') ? <hr /> : ''}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/signup'>
          <button className='btn-primary'>Login</button>
        </Link>
        <Link to='/cart'>
          <img src={cartIcon} alt='Cart Icon' />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
