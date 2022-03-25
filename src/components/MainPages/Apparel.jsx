import React from 'react';
import Nav from '../Reusable/Nav';
import Footer from '../Reusable/Footer';
import Products from './Products';

function Apparel() {
  return (
    <div>
      <Nav />
      <main>
        <hr />
        <div className="apparelSort">
          <p className='results'>16 results</p>
          <form>
            <label>Sort By:</label>
            <select name="list" id="list" >
              <option value="">Collections</option>
              <option value="">Hoodies</option>
              <option value="">Sweaters</option>
              <option value="">Shirts</option>
              <option value="">Accessories</option>
              <option value="">Low to High</option>
              <option value="">High to Low</option>
            </select>
            <input type='button' value="Go" onclick="goToNewPage()" />
          </form>
        </div>

        <Products />
      </main>

      <Footer />
    </div>
  )
}

export default Apparel;