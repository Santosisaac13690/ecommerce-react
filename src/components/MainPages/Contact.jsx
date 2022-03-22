import React from 'react'
import Nav from '../Reusable/Nav'
import Footer from '../Reusable/Footer';

function Contact() {
  return (
    <div>
      <Nav />
      <main>
        <div class="contact">
          <div class="contactInfo">
            <div class="box">
              <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
              <div class="text">
                <h3>Address</h3>
                <p>1101 Red Ventures Dr, Fort Mill, SC 29707</p>
              </div>
            </div>
            <div class="box">
              <div class="icon"><i class="fas fa-phone"></i></div>
              <div class="text">
                <h3>Phone</h3>
                <p>(980)296-3509</p>
              </div>
            </div>
            <div class="box">
              <div class="icon"><i class="far fa-envelope"></i></div>
              <div class="text">
                <h3>Email</h3>
                <p>STAYQUIET@business.com</p>
              </div>
            </div>
          </div>

          <div class="form">
            <form class="contactForm">
              <h2>Send A Message</h2>
    
              <div class="inputBox">
                <label>
                Full Name
                <input type="text" name="contact" required="required" />
                </label>
              </div>
    
              <div class="inputBox">
                <label>
                Email
                <input type="email" name="contact" required="required" />
                </label>
              </div>
    
              <div class="inputBox">
                <label>
                Number
                <input type="text" name="contact" required="required" />
                </label>
              </div>
    
              <div class="inputBox">
                <label>
                Type your Message...
                <textarea name="contact" required="required"></textarea>
                </label>
              </div>
    
              <div class="inputBox">
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