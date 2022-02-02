import React from 'react';
import './App.css';

export default function FoodImages({ foodId, drinkId, sideId }) {
  return <div className="images">
    <img className="food-image" src={`food-${foodId}.png`} />
    <img className="food-image" src={`drink-${drinkId}.png`} />
    <img className="food-image" src={`side-${sideId}.png`}/>
  </div>;
}
