import React from 'react';
import classes from './Services.module.css';
import webMobileApp from '../assets/network.png';
import retail from '../assets/shopping.png';
import software from '../assets/settings.png';
import ux from '../assets/dating.png';

const services = props => (
  <div id="services">
    <h1 className={classes.Tittle}>Services</h1>
    

    <div className={classes.Main}>
      
      <div className={classes.Card}>
        <div className={classes.CardInside}>
          <img src={webMobileApp} alt="Web and Mobile application" />
          <h2>Web and Mobile Development</h2>
          <p>With nearly 80% of potential clients connecting to you from a mobile device, even the simplest application has the potential to  greatly expand your business to a new level. Android, iOS, or desktop we will help you convert your app idea into a flawless mobile  or web app. <span style={{color: 'white'}}>demand, generating online growth and success.</span></p>
        </div>
        <div className={classes.Arrow}>
          <a href="#contact">→</a>
        </div>
      </div>
     
      <div className={classes.Card}>
        <div className={classes.CardInside}>
          <img src={retail} alt="Web and Mobile application" />
          <h2>Retail and Ecommerce</h2>
          <p>We help our clients sell globally by providing innovative and customer-centric solutions to maximize efficiency and productivity to the entire ecommerce experience through seamless integration of flexible and scalable ecommerce solutions to both ends of supply and demand, generating online growth and success.</p>
        </div>
        <div className={classes.Arrow}>
          <a href="#contact">→</a>
        </div>
      </div>

    </div>
    

    <div className={classes.Main}>
      
      <div className={classes.Card}>
        <div className={classes.CardInside}>
          <img src={software} alt="Web and Mobile application" />
          <h2>Custom Software Development</h2>
          <p>We create custom user-driven systems for your small business to provide clients and employees with transparent solutions including custom management software, commercial applications, refactoring of oudated systems and newly created systems that can be integrated seamlesly with existing applications.</p>
        </div>
        <div className={classes.Arrow}>
          <a href="#contact">→</a>
        </div>
      </div>
      
      <div className={classes.Card}>
        <div className={classes.CardInside}>
          <img src={ux} alt="Web and Mobile application" />
          <h2>UI/UX Design</h2>
          <p>With a refined approach to the customer experience, we identify the perfect balance between design and functionality to produce authentic and frictionless designs, revolving around an intuitive interface and a customizable experience that reflects your brand's story. Your site will benefit from increase customer loyalty, higher conversion rates and lowered abandon rates.</p>
        </div>
        <div className={classes.Arrow}>
          <a href="#contact">→</a>
        </div>  
      </div>

    </div>


    <div className={classes.Mainx}>
      
      <div className={classes.Cardx}>
        <div className={classes.CardInsidex}>
          <img src={webMobileApp} alt="Web and Mobile application" />
          <h2>Web and Mobile Development</h2>
          <p>With nearly 80% of potential clients connecting to you from a mobile device, even the simplest application has the potential to  greatly expand your business to a new level. Android, iOS or both, we will help you convert your app idea into a flawless mobile   app.</p>
        </div>
      </div>
      
      <div className={classes.Cardx}>
        <div className={classes.CardInsidex}>
          <img src={retail} alt="Web and Mobile application" />
          <h2>Retail and Ecommerce</h2>
          <p>We help our clients sell globally by providing innovative and customer-centric solutions to maximize efficiency and productivity to the entire ecommerce experience through seamless integration of flexible and scalable ecommerce solutions to both ends of supply and demand, generating online growth and success.</p>
        </div>
      </div>
      
      <div className={classes.Cardx}>
        <div className={classes.CardInsidex}>
          <img src={software} alt="Web and Mobile application" />
          <h2>Custom Software Development</h2>
          <p>We create custom user-driven systems for your small business to provide clients and employees with transparent solutions including custom management software, commercial applications, refactoring of oudated systems and newly created systems that can be integrated seamlesly with existing applications.</p>
        </div>
      </div>
      
      <div className={classes.Cardx}>
        <div className={classes.CardInsidex}>
          <img src={ux} alt="Web and Mobile application" />
          <h2>UI/UX Design</h2>
          <p>With a refined approach to the customer experience, we identify the perfect balance between design and functionality to produce authentic and frictionless designs, revolving around an intuitive interface and a customizable experience that reflects your brand's story. Your site will benefit from increase customer loyalty, higher conversion rates and lowered abandon rates.</p>
        </div>
      </div>

    </div>
    

  </div>
);

export default services;