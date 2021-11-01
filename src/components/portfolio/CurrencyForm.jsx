import React from 'react'; 
import './Portfolio.css'

function CurrencyForm(props) {

  function handleAddSubmit(event) {
    event.preventDefault()
    props.setCurrency(event.target.value.toUpperCase())
  }

  return (
    <div className="container">
      <form className="currency-form" onChange={handleAddSubmit}>
        <label className="choose-currency" htmlFor="currency-select">Choose a currency:</label>
        <select>
            <option value="">--Please choose a currency--</option>
            <option value="usd">USD</option>
            <option value="cad">CAD</option>
            <option value="pesos">Pesos</option>
            <option value="euro">Euro</option>
            <option value="pound">Pound</option>
            <option value="yen">Yen</option> 
        </select>
      </form>
    </div>
  ); 
}

export default CurrencyForm; 