import React from 'react';
import './Mens.css'; // Assuming you have a CSS file for styles
import data from '../Mens/db.json';

const Mens = () => {
  const { products } = data;
  console.log('data',products);

  return (
    <div className="M-container">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <div className="M-first">
            <img
              src={product.thumbnail}
              alt={product.title}
              title={product.title}
              className="product-image"
            />
          </div>

          <div className="product-info">
            <h3 className="product-brand">{product.brand}</h3>
            <h4 className="product-name">{product.title}</h4>
            <h4 className="product-sizes">
              Sizes: {product.sizes.join(', ')}
            </h4>
            <div className="product-price">
              <span className="discounted-price">Rs. {product.price}</span>
              {product.originalPrice && (
                <span className="original-price">Rs. {product.originalPrice}</span>
              )}
              {product.discountPercentage && (
                <span className="discount-percentage">
                  ({product.discountPercentage}% OFF)
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mens;
