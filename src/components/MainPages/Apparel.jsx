import React from 'react'
import Nav from '../Reusable/Nav'
import Footer from '../Reusable/Footer';
import h1 from '../Reusable/images/hoodie1.jpg';
import hBack1 from '../Reusable/images/backhoodie1.jpg';
import h2 from '../Reusable/images/hoodie2.jpg';
import hBack2 from '../Reusable/images/backHoodie2.jpg';
import h3 from '../Reusable/images/hoodie3.jpg';
import hBack3 from '../Reusable/images/backHoodie3.jpg';
import h4 from '../Reusable/images/hoodie4.jpg';
import hBack4 from '../Reusable/images/backHoodie4.jpg';

import s1 from '../Reusable/images/sweater1.jpg';
import sBack1 from '../Reusable/images/backsweater1.jpg';
import s2 from '../Reusable/images/sweater2.jpg';
import sBack2 from '../Reusable/images/backSweater2.jpg';
import s3 from '../Reusable/images/sweater3.jpg';
import sBack3 from '../Reusable/images/backSweater3.jpg';
import s4 from '../Reusable/images/sweater4.jpg';
import sBack4 from '../Reusable/images/backSweater4.jpg';

import sh1 from '../Reusable/images/shirt1.jpg';
import shBack1 from '../Reusable/images/backshirt1.jpg';
import sh2 from '../Reusable/images/shirt2.jpg';
import shBack2 from '../Reusable/images/backShirt2.jpg';
import sh3 from '../Reusable/images/shirt3.jpg';
import shBack3 from '../Reusable/images/backShirt3.jpg';
import sh4 from '../Reusable/images/shirt4.jpg';
import shBack4 from '../Reusable/images/backShirt4.jpg';

import t1 from '../Reusable/images/fronttote1.jpg';
import tBack1 from '../Reusable/images/backtote1.jpg';
import bp2 from '../Reusable/images/backPack2.jpg';
import hat3 from '../Reusable/images/tHat3.jpg';
import mug4 from '../Reusable/images/mug4.jpg';

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

      <div className="row1">
        <div className="row1Items"> 
          <img src={h1} alt="Hoodie1" className="productFront" />
          <img src={hBack1} alt="HoodieBack1" className="productBack" />
          <p>NOTHING CHANGES ~ HOODIE</p>
          <p>$50.00</p>
        </div>

        <div className="row1Items"> 
          <img src={s1} alt="Sweater1" className="productFront" />
          <img src={sBack1} alt="SweaterBack1" className="productBack" />
          <p>NOTHING CHANGES ~ SWEATSHIRT</p>
          <p>$40.00</p>
        </div>

        <div className="row1Items"> 
          <img src={sh1} alt="Shirt1" className="productFront" />
          <img src={shBack1} alt="ShirtBack1" className="productBack" />
          <p>NOTHING CHANGES ~ SHIRT</p>
          <p>$25.00</p>
        </div>

        <div className="row1Items"> 
          <img src={t1} alt="Hoodie1" className="productFront" />
          <img src={tBack1} alt="HoodieBack1" className="productBack" />
          <p>NOTHING CHANGES ~ TOTE BAG</p>
          <p>$20.00</p>
        </div>
      </div>

      <div className="row1">
        <div className="row1Items"> 
          <img src={h2} alt="Hoodie2" className="productFront" />
          <img src={hBack2} alt="HoodieBack2" className="productBack" />
          <p>SOLITUDE ~ HOODIE</p>
          <p>$50.00</p>
        </div>

        <div className="row1Items"> 
          <img src={s2} alt="Sweater2" className="productFront" />
          <img src={sBack2} alt="SweaterBack2" className="productBack" />
          <p>SOLITUDE ~ SWEATSHIRT</p>
          <p>$40.00</p>
        </div>

        <div className="row1Items"> 
          <img src={sh2} alt="Shirt2" className="productFront" />
          <img src={shBack2} alt="ShirtBack2" className="productBack" />
          <p>SOLITUDE ~ SHIRT</p>
          <p>$25.00</p>
        </div>

        <div className="row1Items"> 
          <img src={bp2} alt="Bag1" />
          <p>SOLITUDE ~ BOOK BAG</p>
          <p>$30.00</p>
        </div>
      </div>

      <div className="row1">
        <div className="row1Items"> 
          <img src={h3} alt="Hoodie3" className="productFront" />
          <img src={hBack3} alt="HoodieBack3" className="productBack" />
          <p>WATO? ~ HOODIE</p>
          <p>$50.00</p>
        </div>

        <div className="row1Items"> 
          <img src={s3} alt="Sweater3" className="productFront" />
          <img src={sBack3} alt="SweaterBack3" className="productBack" />
          <p>WATO? ~ SWEATSHIRT</p>
          <p>$40.00</p>
        </div>

        <div className="row1Items"> 
          <img src={sh3} alt="Shirt3" className="productFront" />
          <img src={shBack3} alt="ShirtBack3" className="productBack" />
          <p>WATO? ~ SHIRT</p>
          <p>$25.00</p>
        </div>

        <div className="row1Items"> 
          <img src={hat3} alt="Hat3" />
          <p>WATO? ~ TRUCKER HAT</p>
          <p>$20.00</p>
        </div>
      </div>

      <div className="row1">
        <div className="row1Items"> 
          <img src={h4} alt="Hoodie3" className="productFront" />
          <img src={hBack4} alt="HoodieBack3" className="productBack" />
          <p>ADITLOR ~ HOODIE</p>
          <p>$50.00</p>
        </div>

        <div className="row1Items"> 
          <img src={s4} alt="Sweater3" className="productFront" />
          <img src={sBack4} alt="SweaterBack3" className="productBack" />
          <p>ADITLOR ~ SWEATSHIRT</p>
          <p>$40.00</p>
        </div>

        <div className="row1Items"> 
          <img src={sh4} alt="Shirt3" className="productFront" />
          <img src={shBack4} alt="ShirtBack3" className="productBack" />
          <p>ADITLOR ~ SHIRT</p>
          <p>$25.00</p>
        </div>

        <div className="row1Items"> 
          <img src={mug4} alt="Mug" />
          <p>ADITLOR ~ MUG</p>
          <p>$15.00</p>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}

export default Apparel;