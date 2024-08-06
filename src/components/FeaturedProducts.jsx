import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'New Era Harman Kardon', price: 430000, image: 'product1.jpg' },
  { id: 1, name: 'New Era Harman Kardon', price: 430000, image: 'product1.jpg' },
  // ...
];

function FeaturedProducts() {
  return (
    <div className="featured-products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default FeaturedProducts;
