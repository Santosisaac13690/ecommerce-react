import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
    return (
      <div>
        <nav>
          <ul>
            <li className="title"><Link to="/"><i className="fas fa-microphone-alt-slash"></i></Link></li>
            <li><Link to="/" className="hover"><b>"HOME"</b></Link></li>
            <li><Link to="/apparel" className="hover"><b>"APPAREL"</b></Link></li>
            <li><Link to="/contact" className="hover"><b>"CONTACT"</b></Link></li>
            <li><Link to="/cart" className="cart"><i className="fas fa-shopping-cart"></i></Link></li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Nav;