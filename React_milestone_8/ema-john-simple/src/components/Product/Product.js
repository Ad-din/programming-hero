import React from 'react';
import './Product.css';
const Product = (props) => {
    console.log(props.product);
    const {img,name,price,seller,ratings}=props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
           <h3>{name}</h3>
            <h5>Price:{price}</h5>
            <p>Manufacturer:{seller}</p>
            <p>Rating:{ratings}</p>
            
           </div>
            <button className='btn-cart'>Add to Cart</button>
            
        </div>
    );
};

export default Product;