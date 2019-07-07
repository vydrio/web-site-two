import React from 'react';
import classes from './AboutUs.module.css';
import vLogo from '../assets/vLogo.png';

const aboutUs = props => (
  <div id="aboutUs">
    <div className={classes.Main}>
      <div className={classes.Card1}>
        <div style={{marginTop: '-3vw', padding: '0 3vw 0'}}>
          <h1 className={classes.Tittle}>About us</h1>
          <p>We choose the name Vydr.io because glass (vidrio) is the transparent barrier between us and our devices. We want this  transparency ot transcend in everything that we do. When it comes to our clients Vydrio seeks to provide clear solutions in an   unclear market.</p>
          <div className={classes.Line}></div>
        </div>
      </div>
      <div>
        <img src={vLogo} alt='Vydr.io Logo'/>
      </div>
    </div>

    <div className={classes.Mainx}>
      <div className={classes.Card1x}>
        <img src={vLogo} alt='Vydr.io Logo'/>
      </div>
      <div className={classes.Card2x}>
        <div>
          <h1 className={classes.Tittlex}>About us</h1>
          <p>We choose the name Vydr.io because glass (vidrio) is the transparent barrier between us and our devices. We want this  transparency ot transcend in everything that we do. When it comes to our clients Vydrio seeks to provide clear solutions in an   unclear market.</p>
          <div className={classes.Linex}></div>
        </div>
      </div>
    </div>

  </div>
);
  
  export default aboutUs;