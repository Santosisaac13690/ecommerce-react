import React from 'react'
import Nav from '../Reusable/Nav'
import Footer from '../Reusable/Footer';

function Contact() {
  return (
    <div>
      <Nav />
      <main>
        <div className="contact">
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="text">
                <h3>Address</h3>
                <p>1101 Red Ventures Dr, Fort Mill, SC 29707</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-phone"></i></div>
              <div className="text">
                <h3>Phone</h3>
                <p>(980)296-3509</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i className="far fa-envelope"></i></div>
              <div className="text">
                <h3>Email</h3>
                <p>STAYQUIET@business.com</p>
              </div>
            </div>
          </div>

          <div className="form">
            <form className="contactForm">
              <h2>Contact</h2>
    
              <div className="inputBox">
                <label>
                Name &#42;
                <input type="text" name="contact" required="required" />
                </label>
              </div>
    
              <div className="inputBox">
                <label>
                Email &#42;
                <input type="email" name="contact" required="@" />
                </label>
              </div>
    
              <div className="inputBox">
                <label>
                Number
                <input type="text" name="contact" />
                </label>
              </div>
    
              <div className="inputBox">
                <label>
                Message &#42;
                <textarea name="contact" required="required"></textarea>
                </label>
              </div>
    
              <div className="inputBox">
                <input type="submit" name="submit" value="Send" />
              </div>
            </form>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact;