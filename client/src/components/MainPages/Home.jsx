import React, {useState} from 'react'
import Nav from '../Reusable/Nav'
import Footer from '../Reusable/Footer';
import { Link } from 'react-router-dom';
import Bestseller from './Bestseller';
import axios from "axios";

function Home() {

  const [userEmail, setUserEmail] = useState("");

  const submitEmail = () => {
    axios.post("https://isaac-stayquiet.herokuapp.com/", { user_email: userEmail }).then(() => {
      alert('succesful insert');
    });
  };

  return (
    <div>
      <Nav />
      <header>
        <div className="landing slide">
          <h1 className="headName">"STAY QUIET"</h1>
          <p className="headDesc">Keep Pushin.</p>
          <Link to="/apparel" className="button">"COLLECTIONS"</Link>
        </div>
      </header>

      <section>
        <div className="about">
          <h2>ARTIST & OWNER</h2>
          <p>ISAAC SANTOS</p>
          <div className="buttons">
            <a href="https://www.instagram.com/santos_j_isaac/" target="_blank" rel="noreferrer" aria-label="Instagram" className="button2"><i className="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/isaac-santos-alvarado/" target="_blank" rel="noreferrer" aria-label="Linkedin"  className="button2"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </section>

      <h2 className="collection">"NEW COLLECTION ~ ADITLOR"</h2>
      <section id="slide-container">
        <span id="slider-image-1"></span>
        <span id="slider-image-2"></span>
        <span id="slider-image-3"></span>
        <div id="image-container">
            <img src='./assets/images/hoodie4.jpg' id="slider-image" alt="slideImg1"/>
            <img src='./assets/images/sweater4.jpg' id="slider-image" alt="slideImg2"/>
            <img src='./assets/images/shirt4.jpg' id="slider-image" alt="slideImg3"/>
        </div>
        <div id="button-container">
            <a href="#slider-image-1" id="slider-button" aria-label="btn1"></a>
            <a href="#slider-image-2" id="slider-button" aria-label="btn2"></a>
            <a href="#slider-image-3" id="slider-button" aria-label="btn3"></a>
        </div>
      </section>

      <section>
        <h2 className="collection">"BEST SELLERS"</h2>
        <Bestseller />
      </section>

      <section>
        <div className="subscription">
          <h3>DISCOUNTS, SALES ALERTS, NEW COLLECTIONS & MORE</h3>
          <p>BE THE FIRST TO KNOW. SIGN UP FOR OUR EMAIL SUBSCRIPTION.</p>
          <form>
            <div className="emailFlex">
              <div className="email">
              <label>
                  <input type="email" name="userEmail" placeholder="ENTER YOUR EMAIL" className="email" required 
                  onChange={(e) => {
                    setUserEmail(e.target.value);
                  }}/>
              </label>
              </div>
              <div className="submit">
              <label>
                  <input type="submit" name="submit" value="SUBSCRIBE" className="submit" onClick={submitEmail}/>
              </label>
              </div>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home;