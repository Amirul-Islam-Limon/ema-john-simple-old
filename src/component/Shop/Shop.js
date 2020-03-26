import React, { useState } from 'react';
import fakeData from '../../fakeData'
import'./Shop.css'
import Product from '../Product/Product';
import Chart from '../Cart/Cart';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [product, setproduct]=useState(first10)
    const [cart, setcart] = useState([])

    const handleAddProduct = (product) => {
        console.log("Clicked",product);
        const newcart = [...cart, product]
        setcart(newcart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
               
            {
                product.map(product => <Product
                    handleAddProduct ={handleAddProduct}
                     product ={product}
                     ></Product>)
             }
            
            </div>
            <div className="cart-container">
                <Chart cart ={cart}></Chart>
            </div>
        
          
        </div>
    );
};

export default Shop;