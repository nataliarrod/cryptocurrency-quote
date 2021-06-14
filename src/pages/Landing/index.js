import React, { useState, useEffect } from "react";
import styled from "styled-components";
import imagen from "../../assets/img/cryptomonedas.png";
import Form from "../../components/Form/Form";
import axios from "axios";
import Quote from "../../components/Quote/Quote";
import Spinner from "../../components/Spinner/Spinner";

const Container = styled.div `
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img `
  max-width: 100%;
  margin-top: 5rem;
`;
const Header = styled.h1 `
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function Landing() {
    const [coin, setCoin] = useState("");
    const [crypto, setCrypto] = useState("");
    const [result, setResult] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const quoteCrypto = async() => {
            if (coin === "") return;
            const url = `http://cripto-rogive.vercel.app/markets/${crypto}-${coin}`;
            setIsLoading(true);
            const resultData = await axios.get(url);
            setIsLoading(false);
            setResult(resultData.ticker);
        };
        quoteCrypto();
    }, [coin, crypto]);

    return ( <
        Container >
        <
        div >
        <
        Image src = { imagen }
        alt = "image crypto" / >
        <
        /div> <
        div >
        <
        Header > Quote cryptocurrencies instantly < /Header> <
        Form setCoin = { setCoin }
        setCrypto = { setCrypto }
        /> {
            isLoading ? ( <
                    Spinner / >
                ) :
                ( <
                    Quote result = { result }
                    />
                )
        } <
        /div> <
        /Container>
    );
}

export default Landing;