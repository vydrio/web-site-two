import React, { Component } from 'react';

class Layout extends Component{
  render(){
    return(
      <div>
        <main>
          <p style={{backgroundColor: '#75a9f9'}}>NavBar</p>
          <p style={{backgroundColor: '#ebebeb'}}>About us</p>
          <p style={{backgroundColor: '#f7f6f6'}}>Services</p>
          <p style={{backgroundColor: '#ffffff'}}>Contact</p>
        </main>
        <footer style={{backgroundColor: '#f7f6f6'}}>Footer</footer>
      </div>
    );
  }
}

export default Layout;