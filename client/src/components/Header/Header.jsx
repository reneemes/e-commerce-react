import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeNav = () => setIsOpen(false);

  return (
    <header className='header'>
      <FontAwesomeIcon 
        icon={faBars} 
        size='2xl' 
        style={{color: '#432818',}} 
        onClick={() => setIsOpen(true)}
        id='hamburger-icon'
      />
      {/* Overlay */}
      {isOpen && (
        <div className="overlay" onClick={closeNav} />
      )}
      {/* Mobile */}
      <nav className={`header-nav nav nav--mobile ${isOpen ? 'nav-open' : ''}`} id='mobile-nav'>
        <FontAwesomeIcon 
          icon={faX} 
          size='2xl' 
          style={{color: '#ede0d4',}} 
          onClick={() => setIsOpen(false)}
          id='close-btn'
        />
        <Link className='header-nav__product-btn' to={'/shop'} onClick={() => setIsOpen(false)}>
          Shop Bagels
        </Link>
        <Link className='header-nav__contact-btn' to={'/contact'} onClick={() => setIsOpen(false)}>
          Contact Us
        </Link>
      </nav>

      {/* Title */}
      <Link className='header__title' to={'/'}>Bagel Bites</Link>

      {/* Desktop */}
      <nav className='nav nav--desktop' id='desktop-nav'>
        <Link className='header__product-btn' to={'/shop'}>Shop Bagels</Link>
        <Link className='header__product-btn' to={'/contact'}>Contact Us</Link>
      </nav>
    </header>
  )
}

export default Header;