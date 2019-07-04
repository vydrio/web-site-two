import React, { Component } from 'react';
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Footer from './Footer';

class Layout extends Component{
  render(){
    return(
      <div>
        <main>
          <p style={{backgroundColor: '#75a9f9'}}>NavBar</p>
          <AboutUs />
          <Services />
          <p style={{backgroundColor: '#ffffff'}}>Contact</p>
        </main>
        <Footer />
        <div style={{fontSize: '10px', textAlign: 'center'}}>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
      </div>
    );
  }
}

export default Layout;