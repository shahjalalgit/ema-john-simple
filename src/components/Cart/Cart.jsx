import React from "react";

const Cart = (props) => {
  const cart = props.item;
  // console.log(cart);
  const productPrice = cart.reduce(
    (totalPrice, cartObject) => totalPrice + cartObject.price,
    0
  );
  const realValue = (price) => Number(price.toFixed(2));
  const vat = productPrice * (10 / 100);
  let shipping = 0;
//   switch (productPrice) {
//     case productPrice > 200:
//       shipping = 0;
//       break;
//     case productPrice > 100:
//       shipping = 10;
//       break;
//     case productPrice > 30:
//       shipping = 20;
//       break;
//     default:
//         shipping = 30;
//       break;
//   }
  if (productPrice < 100) {
      shipping = 20; 
  }
  else if (productPrice < 300){
      shipping = 10;
  }
  console.log();
  return (
    <div>
      <h3>Card Container</h3>
      <h4>Item ordered: {cart.length}</h4>
      <p>Item price: {Math.round(productPrice)}</p>
      <p>
        <small>Tex+vat: {realValue(vat)}</small>
      </p>
      <p>
        <small>Shipping cost: {shipping}</small>
      </p>
      <p>Total price: {realValue(productPrice) + realValue(vat) + shipping}</p>
    </div>
  );
};

export default Cart;
