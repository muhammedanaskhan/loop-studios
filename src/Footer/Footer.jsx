import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-desktop'>
        <div className='top-section'>
          <img className='logo' src='/images/loopstudios-icon.svg' alt='logo' />
          <img className='media' src='/images/social-media.png' alt='facebook' />
        </div>
        <div className='bottom-section'>
          <div className='links'>
            <a href='#'>About</a>
            <a href='#'>Careers</a>
            <a href='#'>Events</a>
            <a href='#'>Products</a>
            <a href='#'>Support</a>
          </div>
          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
      <div className='footer-mobile'>
          <img className='logo' src='/images/loopstudios-icon.svg' alt='logo' />
          <div className='mobile-links'>
            <a href='#'>About</a>
            <a href='#'>Careers</a>
            <a href='#'>Events</a>
            <a href='#'>Products</a>
            <a href='#'>Support</a>
          </div>
          <img className='media' src='/images/social-media.png' alt='facebook' />
          <p>© 2021 Loopstudios. All rights reserved.</p>
      </div>
    </div>
   
  )
}

export default Footer