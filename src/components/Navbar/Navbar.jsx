import React from 'react';
import { GiHamBurgerMenu } from 'react-icons/gi';
import { MdOutlineResturantMenu }  from 'react-icons/md';

import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => (
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt='app logo' />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu">Menu</a></li>
      <li className='p__opensans'><a href="#awards">Awards</a></li>
      <li className='p__opensans'><a href="#contact">Contact</a></li>
    </ul>
    <div className='app__navbar-login'>
        <a href="#login" className='p__opensans'>Login / Register</a>
        <div />
        <a href="/" className='p__opensans'>Book Table</a>
    </div>
  </nav>
);

export default Navbar;
