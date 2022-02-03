import React from 'react';

export default function FoodDropdown({ setFoodId }) {
  function handleChange(e) {
    setFoodId(e.target.value);
  }
    
  return <select onChange={handleChange}>
    <option value="1">Chicken</option>
    <option value="2">Veggie Sub</option>
    <option value="3">Breakfast Sandwich</option>
  </select>;
}
