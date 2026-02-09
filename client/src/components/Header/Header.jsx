import './Header.scss';

function Header() {

  return (
    <header className="header">
      {/* <h1 className="header__title" onClick="navToHome()">Bagel Bites</h1> */}
      <nav className="nav nav--desktop" id="desktop-nav">
        <a className="header__product-btn" href="product-page/products.html">Shop Bagels</a>
        <a className="header__contact-btn" href="contact-page/contact.html">Contact Us</a>
      </nav>

      {/* <i className="fa-solid fa-bars fa-2xl" style="color: #432818;" onclick="openNav()" id="hamburger-icon"></i> */}
      <nav className="header-nav nav nav--mobile" id="mobile-nav">
        {/* <i className="fa-solid fa-xmark fa-2xl" style="color: #ede0d4;" onclick="closeNav()" id="close-btn"></i> */}
        <a className="header-nav__product-btn" href="../product-page/products.html">Shop Bagels</a>
        <a className="header-nav__contact-btn" href="contact-page/contact.html">Contact Us</a>
      </nav>
    </header>
  )
}

export default Header;