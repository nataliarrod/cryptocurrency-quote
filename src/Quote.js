import React from 'react';
import styled from "@emotion/styled";

const ResultDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Price = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`

const Quote = ({result}) => {
  if(Object.keys(result).length === 0) return null;
  return ( 
    <ResultDiv>
      <Price>The price is:<span>{result.PRICE}</span></Price>
      <Info>Highest price of the day: <span>{result.HIGHDAY}</span> </Info>
      <Info>Lowest price of the day: <span>{result.LOWDAY}</span> </Info>
      <Info>Variation in the last 24 hours: <span>{result.CHANGEPCT24HOUR}</span> </Info>
      <Info>Last update: <span>{result.LASTUPDATE}</span> </Info>
    </ResultDiv>
  );
}
 
export default Quote;