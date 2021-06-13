import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Error from './Error';
import useCoin from "../src/hooks/useCoin";
import useCrypto from "./hooks/useCrypto";
import axios from "axios";

const Button = styled.input`
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

const Form = ({setCoin, setCrypto}) => {
  const [listCrypto, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  const COINS = [
    { code: "USD", name: "American Dolar" },
    { code: "MXN", name: "Mexican Peso" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Pound Estina" },
  ];

  const [coin, SelectCoin] = useCoin("Choose your coin", "", COINS);
  const [crypto, SelectCrypto] = useCrypto(
    "Choose your cryptocurrency",
    "",
    listCrypto
  );

  useEffect(() => {
    const consultAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const result = await axios.get(url);

      setCryptos(result.data.Data);
    };
    consultAPI();
  }, []);

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

  return (
    <form onSubmit={quoteCoin}>
      {error ? <Error message="All fields are requiered" /> : null}
      <SelectCoin />
      <SelectCrypto />
      <Button type="submit" value="CALCULATE" />
    </form>
  );
};

export default Form;
