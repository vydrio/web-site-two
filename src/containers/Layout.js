import React, { Component } from 'react';
import Contact from '../components/Contact'

class Layout extends Component{
  render(){
    return(
      <div>
        <main>
          <p style={{backgroundColor: '#75a9f9'}}>NavBar</p>
          <p style={{backgroundColor: '#ebebeb'}}>About us</p>
          <p style={{backgroundColor: '#f7f6f6'}}>Services</p>
          <Contact/>
        </main>
        <footer style={{backgroundColor: '#f7f6f6'}}>Footer</footer>
      </div>
    );
  }
}

export default Layout;