import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='header'>
      <Link className='header__title' to={'/'}>Bagel Bites</Link>
      <nav className='nav nav--desktop' id='desktop-nav'>
        <Link className='header__product-btn' to={'/shop'}>Shop Bagels</Link>
        <Link className='header__product-btn' to={'/contact'}>Contact Us</Link>
      </nav>

      <FontAwesomeIcon 
        icon={faBars} 
        size='2xl' 
        style={{color: '#432818',}} 
        onClick={() => setIsOpen(true)}
        id='hamburger-icon'
      />
      <nav className={`header-nav nav nav--mobile ${isOpen ? 'nav-open' : ''}`} id='mobile-nav'>
        <FontAwesomeIcon 
          icon={faX} 
          size='2xl' 
          style={{color: '#ede0d4',}} 
          onClick={() => setIsOpen(false)}
          id='close-btn'
        />
        <Link className='header-nav__product-btn' to={'/shop'}>Shop Bagels</Link>
        <Link className='header-nav__product-btn' to={'/contact'}>Contact Us</Link>
      </nav>
    </header>
  )
}

export default Header;