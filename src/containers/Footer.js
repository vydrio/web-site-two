import React, { Component } from 'react';
import classes from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <div  className={classes.Footer}Footer>
                <div className={classes.Test}>About Us</div>
                <div className={classes.Test}>Services</div>
                <div className={classes.Test}>Contact</div>       
            </div>
        );
    }
}

export default Footer;
