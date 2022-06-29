import React from 'react';
import { NavLink } from 'react-router-dom';
import image from './ninjacode.jpg';
import "./NavBar.css";

function NavBar(){
    return(
        <nav className='to-Bar'>
         <NavLink className="nav-link" to="/"><img src={image} alt="Logo" /></NavLink>
            <div className='clik-Bar'>       
                <NavLink className='categories' to="/categories">Categories</NavLink>
                <NavLink className='toys' to="/toys">Toys</NavLink>
            </div>
        </nav>
    )
}
  
export default NavBar;