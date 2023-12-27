import React from 'react'
import './Banner.css'
import Background from '../assets/images/Bitmap.png'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

function Banner() {
  return (
    <div className='banner'>
        <img src="/images/Bitmap.png" alt="Banner Image" />
        <div className='nav'>
            <img src="/images/loopstudios-icon.svg" alt="Banner Image" />

            <div className='nav-links'>
                <a href="/about">About</a>
                <a href="/Career">Career</a>
                <a href="/Events">Events</a>
                <a href="/Products">Products</a>
                <a href="/Support">Support</a>
            </div>

            <div className='ham-menu'>
                <HamburgerMenu/>
            </div>
            
        </div>
        <div className='text-box'>
            <p>Immersive experiences that deliver</p>
        </div>
    </div>
  )
}

export default Banner