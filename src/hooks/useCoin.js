import React, { useState } from 'react';


const useCoin = () => {
  const [state, setState] = useState('');

  const Select = () => {
    return (
      <>
        <label>Coin</label>
        <select>
          <option value="MXN">Mexican Peso</option>
        </select>
      </>
    );
  };

  return [state, Select, setState];
}
 
export default useCoin;