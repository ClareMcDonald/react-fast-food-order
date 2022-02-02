import React from 'react';
import { useState } from 'react';

export default function InstructionsForm({ instructions, setInstructions }) {
  const [instructionInput, setInstructionInput] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setInstructions([...instructions, instructionInput]);
  }
    
  function handleInstructionChange(e) {
    setInstructionInput(e.target.value);
  }
  return <div>
    <form onSubmit={handleSubmit}>
      <input value={instructionInput} onChange={handleInstructionChange}></input>
    </form>
  </div>;
}
