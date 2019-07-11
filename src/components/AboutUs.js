import React from 'react';
import classes from './AboutUs.module.css';
import vLogo from '../assets/vLogo.png';

const aboutUs = props => (
  <div id="aboutUs">
    <div className={classes.Main}>
      <div className={classes.Card1}>
        <div style={{marginTop: '-3vw', padding: '0 3vw 0'}}>
          <h1 className={classes.Tittle}>About us</h1>
          <p>Vydr.io a team of engineers, designers, and strategists providing end-to-end software development for clients large and small.  <i>Vidrio</i> [“glass” in Spanish] symbolizes the transparency we strive to achieve in everything we do. Our aim is always to provide the simplest and clearest solutions to solve even the most complex problems.  See how vydrio can take your company’s projects to the next level.</p>
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
<p>Vydr.io a team of engineers, designers, and strategists providing end-to-end software development for clients large and small.  <i>Vidrio</i> [“glass” in Spanish] symbolizes the transparency we strive to achieve in everything we do. Our aim is always to provide the simplest and clearest solutions to solve even the most complex problems.  See how vydrio can take your company’s projects to the next level.</p>          <div className={classes.Linex}></div>
        </div>
      </div>
    </div>

  </div>
);
  
  export default aboutUs;
