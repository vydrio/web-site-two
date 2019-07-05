import React from 'react';
import './Navbar.css'
import $ from 'jquery';


/* only execute this script when the document is ready */
$(document).ready(function(){
    /* function called when you click of the button */
    $("button").click(function(){
        
        /* this if else to change the text in the button */
        if($("button").text() == "☰"){
         $("button").text("🞬");
        }else{
          $("button").text("☰");
        }
      
      /* this function toggle the visibility of our "li" elements */
      $("li").toggle("slow");
    });
  });
class Navbar extends React.Component{
    render() {
        return (
            <div className="navbar">
            <nav>
               <ul>
                <button> 🞬 </button>
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
