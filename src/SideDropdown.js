import React from 'react';

export default function SideDropdown({ setSideId }) {
  function handleChange(e) {
    setSideId(e.target.value);
  }

  return <select onChange={handleChange}>
    <option value="1">Nuggets</option>
    <option value="2">Fries</option>
    <option value="3">Apple Slices</option>
  </select>;
}
