import React from 'react';
import classes from './Navbar.module.css'
import longLogo from '../assets/longLogo.png';

class Navbar extends React.Component{
  render() {
    return (
      <nav className={classes.Navb}>
        <div className={classes.longLogoDiv}>
          <img src={longLogo} alt="Long Vydr.io logo" />
        </div>
        <div className={classes.aDiv}>
          <a href="#aboutUs">About us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    );
  }
}
 export default Navbar;