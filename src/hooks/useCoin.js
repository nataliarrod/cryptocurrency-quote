import React, { useState } from "react";
import styled from "styled-components";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;
const Selectt = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCoin = (label, stateInitial, options) => {
  const [state, setState] = useState(stateInitial);

  const Select = () => {
    return (
      <>
        <Label> {label} </Label>{" "}
        <Selectt onChange={(e) => setState(e.target.value)} value={state}>
          <option value=""> -Choose your option - </option>{" "}
          {options.map((option) => (
            <option key={option.code} value={option.code}>
              {" "}
              {option.name}{" "}
            </option>
          ))}{" "}
        </Selectt>{" "}
      </>
    );
  };

  return [state, Select, setState];
};

export default useCoin;
