import React from 'react'
import Nav from '../Reusable/Nav'
import Footer from '../Reusable/Footer';
import { Link } from 'react-router-dom';
import bs1 from '../Reusable/images/hoodie1.jpg';
import bsBack1 from '../Reusable/images/backhoodie1.jpg';
import bs2 from '../Reusable/images/shirt2.jpg';
import bsBack2 from '../Reusable/images/backShirt2.jpg';
import bs3 from '../Reusable/images/hoodie3.jpg';
import bsBack3 from '../Reusable/images/backHoodie3.jpg';
import bs4 from '../Reusable/images/backPack2.jpg';

import nc1 from '../Reusable/images/hoodie4.jpg';
import nc2 from '../Reusable/images/sweater4.jpg';
import nc3 from '../Reusable/images/shirt4.jpg';
import nc4 from '../Reusable/images/mug4.jpg';
import heroimage from '../Reusable/images/heroImage.jpeg';

const hero = {backgroundImage:`url(${heroimage})`}

function Home() {
  return (
    <div>
      <Nav />
      <header>
        <div className="landing slide" style={hero}>
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

      <section>
        <h2 className="collection">"NEW COLLECTION"</h2>

        <div className="slideshow-container">

          <div className="mySlides fade">
            <div className="numbertext">1 / 4</div>
            <img src={nc1} alt="p1" style={{width:"100%"}} />
          </div>

          <div className="mySlides fade">
            <div className="numbertext">2 / 4</div>
            <img src={nc2} alt="p2" style={{width:"100%"}} />
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3 / 4</div>
            <img src={nc3} alt="p3" style={{width:"100%"}} />
          </div>

          <div className="mySlides fade">
            <div className="numbertext">4 / 4</div>
            <img src={nc4} alt="p4" style={{width:"100%"}} />
          </div>

          <button className="prev" onclick="plusSlides(-1)">&#10094;</button>
          <button className="next" onclick="plusSlides(1)">&#10095;</button>

        </div>
        <br />

        <div className='textCenter'>
          <span className="dot" onclick="currentSlide(1)"></span> 
          <span className="dot" onclick="currentSlide(2)"></span> 
          <span className="dot" onclick="currentSlide(3)"></span> 
          <span className="dot" onclick="currentSlide(4)"></span>
        </div>
      </section>

      <section>
        <h2 className="collection">"BEST SELLERS"</h2>
        <div className="nothingChanges">
          <div className="bestItems"> 
            <img src={bs1} alt="Hoodie1" className="productFront" />
            <img src={bsBack1} alt="HoodieBack1" className="productBack" />
            <p>NOTHING CHANGES ~ HOODIE</p>
            <p>$50.00</p>
          </div>

          <div className="bestItems"> 
            <img src={bs2} alt="Sweater1" className="productFront" />
            <img src={bsBack2} alt="SweaterBack1" className="productBack" />
            <p>SOLITUDE ~ SHIRT</p>
            <p>$25.00</p>
          </div>

          <div className="bestItems"> 
            <img src={bs3} alt="Shirt1" className="productFront" />
            <img src={bsBack3} alt="ShirtBack1" className="productBack" />
            <p>WATO? ~ HOODIE</p>
            <p>$50.00</p>
          </div>

          <div className="bestItems"> 
            <img src={bs4} alt="Hoodie1" />
            <p>SOLITUDE ~ BOOK BAG</p>
            <p>$30.00</p>
          </div>
        </div>
      </section>

      <section>
        <div className="subscription">
          <h3>DISCOUNTS, SALES ALERTS, NEW COLLECTIONS & MORE</h3>
          <p>BE THE FIRST TO KNOW. SIGN UP FOR OUR EMAIL SUBSCRIPTION.</p>
          <form>
            <div className="emailFlex">
              <div className="email">
              <label>
                  <input type="email" name="email" placeholder="ENTER YOUR EMAIL" className="email" required />
              </label>
              </div>
              <div className="submit">
              <label>
                  <input type="submit" name="submit" value="SUBSCRIBE" className="submit" />
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