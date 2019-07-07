import React, { Component } from 'react';
import classes from './Footer.module.css';
import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Twitter from '../assets/twitter.png';
import Github from '../assets/github.png';
import Linkedin from '../assets/linkedin.png';


class Footer extends Component {
  render() {
		return (
			<footer className={classes.Main}>
				<div  className={classes.Footer}Footer>
					<a href="#aboutUs">About us|</a>
					<a href="#services">Services|</a>
					<a href="#contact">Contact</a>
				</div>
				<div className={classes.Line}></div>
				<div className={classes.Icons}>
					<img src={Facebook} alt="facebook-icon" />
					<img src={Instagram} alt="instagram" />
					<img src={Twitter} alt="twitter" />
					<img src={Github} alt="github" />
					<img src={Linkedin} alt="linkedin" />
				</div>
			</footer>
		);
	}
}

export default Footer;
