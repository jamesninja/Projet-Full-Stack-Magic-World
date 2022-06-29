import React from 'react';
import { NavLink } from 'react-router-dom';
import image from './logo.jpeg';
import "./NavBar.css";

function NavBar(){
    return(
        <nav className='to-Bar'>
         <NavLink className="nav-link" to="/"><img src={image} alt="Logo" /></NavLink>
            <div className='clik-Bar'>  
                <NavLink className='toys' to="/toys">Toys</NavLink>     
                <NavLink className='categories' to="/categories">Categories</NavLink>
            </div>
        </nav>
    )
}
  
export default NavBar;