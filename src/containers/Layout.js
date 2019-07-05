import React, { Component } from 'react';
import Contact from '../components/Contact'
import Services from '../components/Services';
import AboutUs from '../components/AboutUs';
import Footer from './Footer';
import NavBar from '../components/Navbar'

class Layout extends Component{
  render(){
    return(
      <div>
        <main>
          <NavBar />
          <AboutUs />
          <Services />
          <Contact/>
        </main>
        <Footer />
        <div style={{fontSize: '1vw', textAlign: 'center', marginBottom: '1vw'}}>© Vydr.io, 2019</div>
        <div style={{fontSize: '0.5vw', textAlign: 'center'}}>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
      </div>
    );
  }
}

export default Layout;