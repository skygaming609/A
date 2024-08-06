import React from 'react';

function Categories() {
  const categories = ['New Era', 'Harman Kardon', 'Samsung A53', 'Lampu Meja', 'Sepeda Gunung', 'Oppo Reno'];

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
