import React, { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;
const Selectt = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCrypto = (label, stateInitial, options) => {
  const [state, setState] = useState(stateInitial);

  const SelectCrypto = () => {
    return (
      <>
        <Label>{label}</Label>
        <Selectt
          onChange={e => setState(e.target.value)}
          value={state}
        >
          <option value="">-Choose your option-</option>
          {options.map(option =>(
            <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
          ))}
        </Selectt>
      </>
    );
  };

  return [state, SelectCrypto, setState];
}
 
export default useCrypto;