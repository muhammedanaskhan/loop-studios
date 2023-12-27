// HamburgerMenu.jsx

import React, { useState } from 'react';
import './HamburgerMenu.css';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("tap")
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isOpen ?
          <img src='/images/cross.svg' />
          :
          <img src='/images/ham.svg' />}
      </div>
      {isOpen && (
        <div className="menu-overlay" onClick={closeMenu}>
          <div className="menu-links" onClick={(e) => e.stopPropagation()}>
            <a href="/about">About</a>
            <a href="/Career">Career</a>
            <a href="/Events">Events</a>
            <a href="/Products">Products</a>
            <a href="/Support">Support</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
