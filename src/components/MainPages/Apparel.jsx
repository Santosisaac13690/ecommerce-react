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
              <optgroup label="Price">
                <option value="lth">Low to High</option>
                <option value="htl">High to Low</option>
              </optgroup>
            </select>
          </form>

          <form>
            <label>Filter by:</label>
            <select name="list" id="list" >
              <optgroup label="Categories">
                <option value="hoodies">Hoodies</option>
                <option value="sweaters">Sweaters</option>
                <option value="shirts">Shirts</option>
                <option value="accessories">Accessories</option>
              </optgroup>
            </select>
          </form>
        </div>

        <Products />
      </main>

      <Footer />
    </div>
  )
}

export default Apparel;