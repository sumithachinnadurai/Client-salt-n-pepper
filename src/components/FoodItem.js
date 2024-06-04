import React from 'react';

function FoodItem({ name, price, description }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default FoodItem;
