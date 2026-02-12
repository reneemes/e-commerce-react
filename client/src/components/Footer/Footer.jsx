import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__socials">
        <FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#432818",}}/>
        <FontAwesomeIcon icon={faSquareFacebook} size="2xl" style={{color: "#432818",}}/>
      </div>
      <p className="footer__trademark">Copyright © 2025 Bagel Bites. All rights reserved.</p>
      <p className="footer__disclosure">
        Bagel Bites is a project for educational purposes and is not a
        real store.
      </p>
    </footer>
  )
}

export default Footer;