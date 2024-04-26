import React, { useState } from 'react';
// Code Keypad Component Here

function Keypad() {
    const [password, setPassword] = useState('');
  
    const handleChange = (event) => {
      setPassword(event.target.value);
      console.log('Entering password...');
    };
  
    return (
      <div>
        <input type="password" value={password} onChange={handleChange} />
      </div>
    );
  }
  
  export default Keypad;