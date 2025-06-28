import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const Navbar = () => { 
  return (
    <nav className="navbar">
      <img src="https://th.bing.com/th/id/OIP.BMu4EzQBX1pqtZYbvyp2vQHaFS?r=0&pid=ImgDet&w=184&h=131&c=7&dpr=1.3&cb=idpwebpc1" alt="Logo" className="logo"/> {/* Updated image */}
      <ul className="nav-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Images</a></li>
        <li><a href="#">Videos</a></li>
        <li><button className="contact-button">Contact Us</button></li> 
      </ul>    
    </nav>
  );
};


export default Navbar;
