import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div style={{ height: '55vh' }} className='container valign-wrapper'>
        <div className='row white'>
          <div className='col s12 center-align'>
            <div className='section-title' style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '25px' }} className='head-title blue'>
                Contact Us
              </h2>
              <span
                style={{
                  backgroundColor: 'grey',
                  display: 'block',
                  height: '.5px'
                }}
              />

              <div
                className='contac-info'
                style={{
                  display: 'block',
                  position: 'relative',
                  bottom: '25px'
                }}
              >
                <span
                  style={{
                    position: 'relative',
                    left: '350px',
                    top: '35px',
                    backgroundColor: 'brown',
                    display: 'block',
                    blockSize: '125px',
                    width: '190px'
                  }}
                >
                  Map Will go here
                </span>
                <ul
                  style={{
                    listStyle: 'none',
                    position: 'relative',
                    bottom: '100px'
                  }}
                >
                  <li style={{ marginBottom: '10px' }}>Dallas,TX</li>
                  <li style={{ marginBottom: '10px' }}>
                    Phone: <span>555-555-555</span>
                  </li>
                  <li>
                    Email: <span> info@vydr.io</span>
                  </li>
                </ul>
                <span
                  style={{
                    display: 'block',
                    width: '650px',
                    position: 'relative',
                    left: '350px',
                    bottom: '80px'
                  }}
                >
                  Feel free to drop us a message with your contact information
                  and we will get in touch with you as soon as possible
                </span>
              </div>
              <div className='forms' style={{ display: 'block', position: 'relative', bottom: '100px' }}>
                <form>
                  <input placeholder='Message' style={{ width: '195px', blockSize: '60px', borderRadius: '.3rem', fontSize: '30px', textAlign: 'center' }}/>
                  <br/>
                  <input placeholder='Email Address' style={{ fontSize: '30px', textAlign: 'center' }} />
                  <input placeholder='Full Name' style={{ fontSize: '30px', textAlign: 'center'}}/>
                  <span className='btn' style={{ background: 'blue', borderRadius: '.4rem', position: 'relative' }}><a href='#' style={{ textShadow: 'red'}}>Send</a></span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
