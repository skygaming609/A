import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rp {product.price}</p>
      <div className="rating">{/* Implementasi rating di sini */}</div>
    </div>
  );
}

export default ProductCard;
