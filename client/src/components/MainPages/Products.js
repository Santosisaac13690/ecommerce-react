import React from 'react';
import axios from "axios";

export default class Products extends React.Component{
    state = {
        products: [],

    }
    componentDidMount(){
        axios.get('http://localhost:3001/api/products_info').then(res => {
            this.setState({ products: res.data })
        })
    }
    render() {
        return (
            <>
              <div className="row">
                      {this.state.products.map((card) => {
                          return (
                              <div className="rowItems">
                                  <img src={card.front_image} alt={card.image_alt} className="productFront" />
                                  <img src={card.back_image} alt={card.image_alr} className="productBack" />
                                  <p>{card.product_description}</p>
                                  <p>${card.product_price}</p>
                              </div>
                          )
                      })}
              </div>
          </>
        )
      }
}