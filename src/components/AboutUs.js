import React from 'react';
import classes from './AboutUs.module.css';

const aboutUs = props => (
  <div>
    <div className={classes.Header}>
     About us
    </div>
    <div  className={classes.Content}>
     We choose the name Vydr.io because glass (vidrio) is the transparent barrier between us and our devices. We want this transparency ot transcend in everything that we do. When it comes to our clients Vydrio seeks to provide clear solutions in an unclear market.
    </div>
  </div>
  );
  
  export default aboutUs;