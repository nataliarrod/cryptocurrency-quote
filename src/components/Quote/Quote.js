import React from 'react';
import styled from "styled-components";

const ResultDiv = styled.div `
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p `
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Price = styled.p `
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Quote = ({ result }) => {
    if (Object.keys(result).length === 0) return null;
    return ( <
        ResultDiv >
        <
        Price > The price is: < span > { result.last_price[0] } < /span></Price >
        <
        Info > Lowest ask price: < span > { result.min_ask[0] } < /span> </Info >
        <
        Info > Highest bid price: < span > { result.max_bid[0] } < /span> </Info >
        <
        Info > Volume: < span > { result.volume[0] } < /span> </Info >
        <
        Info > Price variation 24 h: < span > { result.price_variation_24h } < /span> </Info >
        <
        Info > Price variation 7 d: < span > { result.price_variation_7d } < /span> </Info >
        <
        /ResultDiv>
    );
}

export default Quote;