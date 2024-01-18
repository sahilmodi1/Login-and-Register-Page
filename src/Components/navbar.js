import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faLocationDot, faIndianRupeeSign, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';

  
const navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="hugoboss.com" className="navbar-item">
        <img src="https://taglette.com/img/hugo-boss-logo-white.png" alt="HUGO BOSS logo" />
        </a>
      </div>
      <div>
        <a href="#">
            MEN
        </a>
        <a href="#">
            WOMEN
        </a>
      </div>
      <div>
        <a href="#">
         <FontAwesomeIcon icon={faMagnifyingGlass} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLocationDot} />
        </a>
        <a href="#">
         <FontAwesomeIcon icon={faIndianRupeeSign} />
        </a>
        <a href="#">
         <FontAwesomeIcon icon={faHeart} />
        </a>
        <a href="#">
         <FontAwesomeIcon icon={faCartShopping} />
        </a>
      </div>
    </nav>
    <div>
        <div className="menu">
        <a href="#" className="item">
            SALE 
        </a>
        <a href="#" className="item">
            NEW IN
        </a>
        <a href="#" className="item">
            CLOTHING
        </a>
        <a href="#" className="item">
            SHOES
        </a>
        <a href="#" className="item">
            ACCESSORIES
        </a>
        <a href="#" className="item">
            SPORTS
        </a>
        <a href="#" className="item">
            OUR BRANDS
        </a>
        <a href="#" className="item">
            HIGHLIGHTS
        </a>
        <a href="#" className="item">
            GIFTS
        </a>
        </div>
    </div>
    </>
  );
};

export default navbar;