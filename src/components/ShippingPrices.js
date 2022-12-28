import * as utils from "../utils";

import React, { useEffect } from "react";

const Shipping = ({ prices, getShippingPrices }) => {
  useEffect(() => {
    getShippingPrices();
  }, []);

  return (
    <div className="app-cart">
      <h3>Shipping Prices</h3>
      {prices.map((shipping) => (
        <div key={shipping.id} className="shipping-item">
          <span>{shipping.name}</span>
          <span>{utils.currency(shipping.id)}</span>
        </div>
      ))}
    </div>
  );
};

export default Shipping;
