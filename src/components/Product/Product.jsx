import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import './Product.css';
const Product = (props) => {
  //console.log(props.product);
  const {name, img, seller, price, stock} = props.product;
  return (
    <div className="product">
      <div className="product-img">
          <img src={img} alt="" />
      </div>
      <div className="productDetails">
        <h3>{name}</h3>
        <p><small>by: {seller}</small></p>
        <p>price: {price}</p>
        <p>Only {stock} left in stock - Order soon</p>
        <button className="btn" type="submit" onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
      </div>
    </div>
  );
};

export default Product;
