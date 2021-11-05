import React from 'react'; 
import axios from 'axios';
import './Portfolio.css'

function CurrencyForm(props) {

  function handleCurrencyChange(event) {
    event.preventDefault()
    props.setCurrency(event.target.value.toUpperCase())

    // Access only granted from the oregonstate.edu domain. 
    // Must use VPN to use the currency converter feature. 
    axios.post('http://flip3.engr.oregonstate.edu:20155/', {
      amount: props.totalWorth,
      conversion: event.target.value
    })
    .then(function (response) {
      props.setCurrencySymbol(response.data.symbol)
      props.setDisplayTotalWorth(response.data.convertedAmount)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="container">
      <form className="currency-form" onChange={handleCurrencyChange}>
        <label className="choose-currency" htmlFor="currency-select">Choose a currency:</label>
        <select>
            <option value="USD">--Please choose a currency--</option>
            <option value="AUD">AUD - Australian Dollar</option> 
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="CHF">CHF - Swiss Franc</option> 
            <option value="CNY">CNY - Chinese Yuan Renminbi</option>
            <option value="EUR">EUR - Euro Member Countries</option>
            <option value="GBP">GBP - United Kingdom Pound</option>
            <option value="JPY">JPY - Japan Yen</option> 
            <option value="KRW">KRW - Korea (South) Won</option> 
            <option value="MXN">MXN - Mexico Peso</option>
            <option value="USD">USD - United State Dollar</option>
        </select>
      </form>
    </div>
  ); 
}

export default CurrencyForm; 