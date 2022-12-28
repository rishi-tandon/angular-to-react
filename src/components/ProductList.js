import { Link } from "react-router-dom";
import ProductAlerts from "./ProductAlerts";
import React from "react";
import { products } from "../products";

const ProductList = ({ name, match }) => {
  const share = () => {
    window.alert("The product has been shared!");
  };

  const onNotify = () => {
    window.alert("You will be notified when the product goes on sale");
  };

  return (
    <div className="product-list">
      <h2>Products</h2>

      {products.map((product, index) => {
        return (
          <div key={product.name}>
            <h3>
              <Link
                to={`${match.url}products/${index}`}
                title={`${product.name} details`}
              >
                {product.name}
              </Link>
            </h3>
            {product.description && (
              <p>{`Description: ${product.description}`}</p>
            )}
            <button onClick={share}>Share</button>
            <ProductAlerts product={product} notify={onNotify} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
