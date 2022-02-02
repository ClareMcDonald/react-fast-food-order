import logo from './logo.svg';
import { useState } from 'react';
import NameInput from './NameInput';
import './App.css';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setdrinkId] = useState(1);
  const [instructions, setInstructions] = useState(['']);
  const [orderName, setOrderName] = useState('');

  return (
    <div className="App">
      <h2>Order for: {orderName}</h2>
      {/* // <p>food: {foodId}</p>
      // <p>drink: {drinkId}</p>
      // <p>side: {sideId}</p> */}
      <div className="order-from">
        <NameInput setOrderName={setOrderName}/>
      </div>
    </div>
  );
}

export default App;
