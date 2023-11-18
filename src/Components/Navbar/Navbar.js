import React, { useState } from "react";
import logo from '../Assets/logo.png';
import cartIcon from '../Assets/cart_icon.png';
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar()
{
    const [menu,setMenu]=useState('shop');
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>Shopper</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu('shop')}}><Link to="/"> Shop</Link> {menu === 'shop' ? <hr /> : ''}</li>
                <li onClick={() => {setMenu('men')}}><Link to="/men">Men</Link> {menu === 'men' ? <hr /> : ''}</li>
                <li onClick={() => {setMenu('women')}}><Link to="/women">Women</Link> {menu === 'women' ? <hr /> : ''}</li>
                <li onClick={() => {setMenu('kids')}}><Link to="/kids">Kids</Link> {menu === 'kids' ? <hr /> : ''}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/signup"><button className="btn-primary">Login</button></Link>
                <Link to="/cart"><img src={cartIcon} alt="Cart Icon" /></Link>
            </div>
        </div>
    )
}

export default Navbar;