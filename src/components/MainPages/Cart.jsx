import React from 'react'
import Nav from '../Reusable/Nav'
import Footer from '../Reusable/Footer';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div>
      <Nav />
      <section>
        <div class="cartPage">
          <h2>YOUR CART IS EMPTY.</h2>
          <Link to="/apparel" className="cShopping">"CONTINUE SHOPPING"</Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Cart;