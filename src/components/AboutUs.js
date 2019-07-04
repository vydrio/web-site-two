import React from 'react';
import classes from './AboutUs.module.css';

const aboutUs = props => (
  <div>
  
  <div className={classes.Prime}>
  <div className={classes.Card}>
    <div className={classes.CardInside}>
      <div className={classes.Header}>
      <h1>About us</h1>
      </div>
      <p>We choose the name Vydr.io because glass (vidrio) is the transparent barrier between us and our devices. We want this transparency ot transcend in everything that we do. When it comes to our clients Vydrio seeks to provide clear solutions in an unclear market.</p>
    </div>
  </div>
  <div className={classes.Card2}>
    <div className={classes.CardInside1}>
      <img src={require('../assets/logo.jpg')} />
    </div>
  </div>
  
</div>
</div>
  );
  
  export default aboutUs;