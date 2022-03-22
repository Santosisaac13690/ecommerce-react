import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <footer>
            <div class="logo">
              <Link to='/'><i class="fas fa-microphone-alt-slash"></i></Link>
            </div>
            <ul>
              <li><a href="https://www.instagram.com/santos_j_isaac/" target="_blank" rel="noreferrer" aria-label="instagram"><i class="fab fa-instagram"></i></a></li>
              <li><a href="https://www.linkedin.com/in/isaac-santos-alvarado/" target="_blank" rel="noreferrer" aria-label="linkedin"><i class="fab fa-linkedin"></i></a></li>
              <li><a href="https://www.facebook.com/santosjisaac/" target="_blank" rel="noreferrer" aria-label="facebook"><i class="fab fa-facebook-square"></i></a></li>
              <li><a href="mailto:santosisaac13690@gmail.com" target="_blank" rel="noreferrer" aria-label="email"><i class="fas fa-envelope-square"></i></a></li>
            </ul>
            <p class="copyright">Copyright &copy; 2021, "STAY QUIET"</p>
        </footer>
    </div>
  )
}

export default Footer;