import React, {useState} from 'react';
import './Portfolio.css';
import CurrencyForm from './CurrencyForm';

function TotalWorth(props) {
  const [currency, setCurrency] = useState("USD"); 
  const [currencySymbol, setCurrencySymbol] = useState("$"); 

  return (
    <div className="section">
      <div className="container total-container">
        <h2 className="total-title">Total: </h2>
        <h2 className="total-value">{currencySymbol} {props.displayWorth.toLocaleString()}</h2>
        <h3 className="total-currency">{currency}</h3>
      </div>
      <CurrencyForm 
        setCurrency={setCurrency} 
        setCurrencySymbol={setCurrencySymbol} 
        totalWorth={props.totalWorth} 
        setDisplayTotalWorth={props.setDisplayTotalWorth} 
      />
    </div>
  );
} 
  
export default TotalWorth;