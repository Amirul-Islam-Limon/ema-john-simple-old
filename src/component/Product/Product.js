import React from 'react';
import'./Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="text">
                <h4>{name}</h4>
                <br/>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock-Order soon</p>
                <button className="main-btn"
                onClick= {() =>props.handleAddProduct(props.product)}
                ><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;