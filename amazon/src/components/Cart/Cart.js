import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    
    // const totalPrice = cart.reduce((total, prd) => total+ prd.price, 0);
    

    // total price amount logic
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
 
    // Shipping chage logic
    let shipping = 0;
    
    if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    else if(total > 35){
        shipping = 0;
    }

    // Tax logic
    const tax = (total / 5).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    // Number Formating logic
    const formateNumber = num =>{
        const precision = num.toFixed(2);
        return Number (precision);
    }

    //  Cart logic
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Itmes Ordered : {cart.length}</p>
            <p>Product Price : {formateNumber(total)}</p>
            <p><small>Shipping cost : $ {shipping}</small></p>
            <p><small>Total Vat + Tax : $ {tax}</small></p>
            <p>Total Price : $ {grandTotal}</p>
            
        </div>
    );
};

export default Cart;