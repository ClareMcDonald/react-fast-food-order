import React from 'react';
import './App.css';
import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
  return <div className="instructions">
    {instructions.map((instruction, i) => <Instruction key={`${instruction}-${i}`} instruction={instruction} />)}
  </div>;
}
