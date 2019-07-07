import React, { Component } from 'react';
import classes from './Contact.module.css';
import map from '../assets/networkTwo.png';
import location from '../assets/maps-and-flags.png';
import phone from '../assets/phone-receiver.png';
import mail from '../assets/close-envelope.png';


export default class Contact extends Component {
  render() {
    return (
      <div id="contact" style={{marginTop: '-2%'}}>
        <h1 className={classes.Tittle}>Contact us</h1>
        <div className={classes.Main}>
          <div className={classes.Map}>
            <img src={map} alt='map'/>
          </div>
          <div className={classes.PartTwo}>
            <div className={classes.Sentences}>
              <img src={location} alt='location icon'/>
              <p><strong>Location:</strong> Dallas, Tx.</p>
            </div>
            <div className={classes.Sentences}>
              <img src={phone} alt='location icon'/>
              <p><strong>Phone:</strong> coming soon...</p>
            </div>
            <div className={classes.Sentences}>
              <img src={mail} alt='location icon'/>
              <p><strong>Email:</strong> info@vydr.io</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
