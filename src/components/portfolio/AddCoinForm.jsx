import axios from 'axios';
import React, {useState} from 'react';

function AddCoinForm(props) {

    const [input, setInput] = useState(""); 
    const [amount, setamount] = useState(""); 
    function nameInput(event) {
      event.preventDefault()
      setInput(event.target.value) 
    }
    function quantityInput(event) {
      event.preventDefault()
      setamount(event.target.value) 
    }

    function handleAddSubmit(event) {
      event.preventDefault();

      axios
      .get('https://api.coingecko.com/api/v3/coins/'+input.toLowerCase()+'?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false')
      .then(res => {
        let id = res.data.name
        let symbol = res.data.symbol
        let logo = res.data.image.thumb
        let price = res.data.market_data.current_price.usd

        const totalCalc = () => {
          let x = Number(res.data.market_data.current_price.usd)
          let y = Number(amount)
          let z = x * y 
          return z
        }
        let total = totalCalc()

        console.log(input, id)

        props.addCoin(input, amount, id, symbol, logo, price, total)
        setInput(""); 
        setamount(""); 
      })
    }

    return(
      <div className="section">
        <div className="container">
          <h2>Add Coin</h2>
          <form onSubmit={handleAddSubmit}>
            <input 
              type="text" 
              placeholder='Name of coin...' 
              value={input}
              onChange={nameInput}
            ></input>
            <input 
              type="number" 
              placeholder='Amount you own...' 
              value={amount}
              onChange={quantityInput} 
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    ); 
}

export default AddCoinForm;