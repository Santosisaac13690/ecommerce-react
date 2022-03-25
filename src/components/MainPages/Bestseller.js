import React from 'react';
import products from '../../Products.json';

function Bestseller() {
  return (
      <>
        <div className="nothingChanges">
                {products.bestSellers.map((card) => {
                    return (
                        <div className="bestItems">
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

export default Bestseller;