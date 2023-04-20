import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { FaBars,FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [click , setClick]=useState(false)
    const handleClick =()=> setClick(!click)

    return (
        <div className='header'>
          
            <Link to='/' className='header-title'>
                <h1>Portpolio</h1>
            </Link>
            <ul className={click?"nav-menu active":'nav-menu'} >
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>Project</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>

            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click? <FaTimes size={20} style={{color:"#fff"}}/>:<FaBars size={20} style={{color:"#fff"}}/>}
           
            
            </div>
        </div>
    );
}

export default Navbar;
