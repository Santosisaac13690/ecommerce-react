import React from 'react';
import products from '../../Products.json';

function Products() {
  return (
      <>
        <div className="row1">
                {products.apparel1.map((card) => {
                    return (
                        <div className="row1Items">
                            <img src={card.image} alt={card.imageAlt} className="productFront" />
                            <img src={card.imageBack} alt={card.imageAlt} className="productBack" />
                            <p>{card.description}</p>
                            <p>{card.price}</p>
                        </div>
                    )
                })}
        </div>

        <div className="row1">
                {products.apparel2.map((card) => {
                    return (
                        <div className="row1Items">
                            <img src={card.image} alt={card.imageAlt} className="productFront" />
                            <img src={card.imageBack} alt={card.imageAlt} className="productBack" />
                            <p>{card.description}</p>
                            <p>{card.price}</p>
                        </div>
                    )
                })}
        </div>

        <div className="row1">
                {products.apparel3.map((card) => {
                    return (
                        <div className="row1Items">
                            <img src={card.image} alt={card.imageAlt} className="productFront" />
                            <img src={card.imageBack} alt={card.imageAlt} className="productBack" />
                            <p>{card.description}</p>
                            <p>{card.price}</p>
                        </div>
                    )
                })}
        </div>

        <div className="row1">
                {products.apparel4.map((card) => {
                    return (
                        <div className="row1Items">
                            <img src={card.image} alt={card.imageAlt} className="productFront" />
                            <img src={card.imageBack} alt={card.imageAlt} className="productBack" />
                            <p>{card.description}</p>
                            <p>{card.price}</p>
                        </div>
                    )
                })}
        </div>
    </>

    
  )
}

export default Products;
