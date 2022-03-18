import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import data from "./../../fakeData";
import "./Shop.css";
const Shop = () => {
  const data10 = data.slice(0, 10);
  const [products, setProduct] = useState(data10);
  // console.log(products);
  const [item, setItem] = useState([]);

  const handleAddProduct = (product) => {
    const newItem = [...item, product];
    setItem(newItem);
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd) => (
          <Product product={pd} handleAddProduct={handleAddProduct}></Product>
        ))}
      </div>
      <div className="card-container">
            <Cart item = {item}></Cart>
      </div>
    </div>
  );
};

export default Shop;
