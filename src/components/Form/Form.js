import React, { useState } from "react";
import styled from "styled-components";

import Error from '../Error/Error';
import useCoin from "../../hooks/useCoin";
import useCrypto from "../../hooks/useCrypto";
import { COIN_LIST, CRYPTO_LIST } from '../../utils/selectoptions'

const Button = styled.input `
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({ setCoin, setCrypto }) => {
    const [error, setError] = useState(false);

    const [coin, SelectCoin] = useCoin("Choose your coin", "", COIN_LIST);
    const [crypto, SelectCrypto] = useCrypto(
        "Choose your cryptocurrency",
        "",
        CRYPTO_LIST
    );

    const quoteCoin = (e) => {
        e.preventDefault();
        if (coin === "" || crypto === "") {
            setError(true);
            return;
        }
        setError(false);
        setCoin(coin);
        setCrypto(crypto);
    };

    return ( <
        form onSubmit = { quoteCoin } > { error ? < Error message = "All fields are requiered" / > : null } <
        SelectCoin / >
        <
        SelectCrypto / >
        <
        Button type = "submit"
        value = "CALCULATE" / >
        <
        /form>
    );
};

export default Form;