import React from 'react';
import './App.css';

export default function FoodImages({ foodId }) {
  return <div className="images">
    <img className="food-image" src={`food-${foodId}.png`} />
  </div>;
}
