import { Link } from "react-router-dom";
import React from "react";

const TopBar = () => {
  return (
    <div className="app-top-bar">
      <Link to="/">
        <h1>My Store</h1>
      </Link>
      <Link className="button fancy-button" to="/checkout">
        <i className="material-icons">shopping_cart</i>Checkout
      </Link>
    </div>
  );
};

export default TopBar;
