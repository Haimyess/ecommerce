/** @format */

import React from "react";

const ProductCard = ({ props }) => {
  // console.log(props);
  function addToCart() {}
  return (
    <div className='card'>
      <img className='product-img' src={props.product_image} />
      <div>
        <h3 className='product-title'>{props.product_name}</h3>
        <p className='product-info'>{props.product_description}</p>
        <p className='product-price'>{props.product_price}</p>
      </div>
      <button className='product-btn' onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
