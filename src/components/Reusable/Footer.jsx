import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <footer>
            <div className="logo">
              <Link to='/'><i className="fas fa-microphone-alt-slash"></i></Link>
            </div>
            <ul>
              <li><a href="https://www.instagram.com/santos_j_isaac/" target="_blank" rel="noreferrer" aria-label="instagram"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/in/isaac-santos-alvarado/" target="_blank" rel="noreferrer" aria-label="linkedin"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="https://www.facebook.com/santosjisaac/" target="_blank" rel="noreferrer" aria-label="facebook"><i className="fab fa-facebook-square"></i></a></li>
              <li><a href="mailto:santosisaac13690@gmail.com" target="_blank" rel="noreferrer" aria-label="email"><i className="fas fa-envelope-square"></i></a></li>
            </ul>
            <p className="copyright">Copyright &copy; 2021, "STAY QUIET"</p>
        </footer>
    </div>
  )
}

export default Footer;