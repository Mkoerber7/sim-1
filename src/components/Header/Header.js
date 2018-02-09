import React, { Component } from 'react';
import './Header.css';
import headerImage from '../assets/logo.png';


const Header = () => {
    return (
    <div id='coolDiv'>
      <div className='header-container'>
        <img class='header-img' src={headerImage} alt='Shelfie Logo'/>
        <span class='shelfie-title'>SHELFIE</span>
      </div>
    </div>
    )
}

export default Header;