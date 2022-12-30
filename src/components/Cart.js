import { Link } from "react-router-dom";
import React from "react";
import UserInformation from "./UserInformation";
import UserInformationRefactor from "./UserInformationRefactor";
import { currency } from "../utils";

const Cart = ({ products, clearCart }) => {
  return (
    <div className="app-cart">
      <p>
        <Link to="/shipping">Shipping Prices</Link>
      </p>
      <h3>Cart</h3>
      {products.map((product) => {
        <div key="{product.name}" className="cart-item">
          <span>{product.name}</span>
          <span>{currency(product.price)}</span>
        </div>;
      })}
      {/*<UserInformation clearCart={clearCart} />*/}
      {/*<ReactForm />*/}
      <UserInformationRefactor clearCart={clearCart} />
    </div>
  );
};

export default Cart;
