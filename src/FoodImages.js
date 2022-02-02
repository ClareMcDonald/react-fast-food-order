import React from 'react';
import './App.css';

export default function FoodImages({ foodId, drinkId }) {
  return <div className="images">
    <img className="food-image" src={`food-${foodId}.png`} />
    <img className="food-image" src={`drink-${drinkId}.png`}/>
  </div>;
}
