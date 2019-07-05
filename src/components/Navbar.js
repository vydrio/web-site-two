import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css'



class Navbar extends React.Component{
    render() {
        return (
            <div className="navbar">
              <a href="#" className="logo">Vydrio</a>
              <ul className="nav">
                <li><a href="#home">home </a></li>
                <li><a href="#about">about </a></li>
                <li><a href="#services">services</a></li>
                <li><a href="#Contact">Contact</a></li>
              </ul>

              <div className="home-area" id="home"></div>
              <div className="about-area" id="about"></div>
              <div className="services-area" id="services"></div>
              <div className="Contact-area" id="Contact"></div>
            </div>
           
            
        );
    }
}
 export default Navbar;
