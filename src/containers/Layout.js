import React, { Component } from 'react';
import Services from '../components/Services';

class Layout extends Component{
  render(){
    return(
      <div>
        <main>
          <p style={{backgroundColor: '#75a9f9'}}>NavBar</p>
          <p style={{backgroundColor: '#ebebeb'}}>About us</p>
          <Services />
          <p style={{backgroundColor: '#ffffff'}}>Contact</p>
        </main>
        <footer style={{backgroundColor: '#f7f6f6'}}>Footer</footer>
        <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
      </div>
    );
  }
}

export default Layout;