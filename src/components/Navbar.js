import React from 'react';
import ReactDOM from 'react-dom';
import './Navbar.css'



class Navbar extends React.Component{
    render() {
        return (
            <div className="navbar">
            <nav>
               <ul>
                    <li> 
      
                         <a href="#aboutMe"> HOME </a>
                    </li>
                    <li>
     
                        <a href="#projects"> ABOUT </a>
                    </li>
                     <li>
      
                        <a href="#cv"> SERVICES </a>
                    </li>
                    <li>
      
                        <a href="#contacts"> Contact </a>
                    </li>
            </ul>
            </nav>

              <div className="home-area" id="home"></div>
              <div className="about-area" id="about"></div>
              <div className="services-area" id="services"></div>
              <div className="Contact-area" id="Contact"></div>
            </div>
           
            
        );
    }
}
 export default Navbar;
