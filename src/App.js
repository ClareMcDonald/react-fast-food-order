import logo from './logo.svg';
import { useState } from 'react';
import NameInput from './NameInput';
import FoodImages from './FoodImages';
import FoodDropdown from './FoodDropdown';
import DrinkDropdown from './DrinkDropdown';
import './App.css';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [instructions, setInstructions] = useState(['']);
  const [orderName, setOrderName] = useState('');

  return (
    <div className="App">
      <h2>Order for: {orderName}</h2>
      <FoodImages foodId={foodId} drinkId={drinkId} />

      <div className="order-from">
        <NameInput setOrderName={setOrderName} />
        <FoodDropdown setFoodId={setFoodId} /> 
        <DrinkDropdown setDrinkId={setDrinkId} />
      </div>
    </div>
  );
}

export default App;
