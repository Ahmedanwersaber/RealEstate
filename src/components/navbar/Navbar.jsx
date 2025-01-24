import React, { useState } from 'react'
import './Navbar.css'
import closeIcon from '../../assets/closeIcon.png'
import menuIcon from '../../assets/menuIcon.png'
const Navbar = ({style}) => {

    const[isMenuOpen ,setMenuOpen]=useState(false)
    const toggleMenu=()=>{
        setMenuOpen(!isMenuOpen)
    }
  return (
    <div className='navbar' style={style}>
        <div className='navbar-container'>
            <div className='navbar-logo'>
                <h1>ANwer <small>Real Estate</small></h1>
            </div>
            <div className='navbar-icon' onClick={toggleMenu}> 
                <img src={isMenuOpen ? closeIcon : menuIcon } alt="" />
                 </div>
            <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul className='navbar-menuItems'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/properties">Properties</a></li>
                    <li><a href="/">Agents</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
                <p className='navbar-submit'>
                    <a href="/">Submit a Property</a>
                </p>
            </div>

        </div>
    
    </div>
  )
}

export default Navbar
