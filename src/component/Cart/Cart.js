import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for(let i = 0; i < cart.length; i++){
       const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99
    }
    else if (total > 0){
        shipping = 12.99
    }
    const Tax = total / 10;

    const formateNumber = num=>{
        const precision = num.toFixed(2)
        return Number(precision);
    }

    return (
        <div>
            <h2>Order Summary :</h2>
            <h3>Items Ordered :{cart.length}</h3>
            <h3>Product Price : {formateNumber(total)}</h3>
            <h4>Shipping Const :{formateNumber(shipping)}</h4>
            <h4>Tax + Vat:{formateNumber(Tax)}</h4>
            <h3>Total Price :{formateNumber(total + shipping + Tax)}</h3>
        </div>
    );
};

export default Cart;