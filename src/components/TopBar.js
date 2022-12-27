import { Link } from 'react-router-dom';
import React from 'react';

const TopBar = () => {
  return (
    <div className="app-top-bar">
      <Link to="/">
        <h1>My Store</h1>
      </Link>
      <a className="button fancy-button">
        <i className="material-icons">shopping_cart</i>Checkout
      </a>
    </div>
  );
};

export default TopBar;
