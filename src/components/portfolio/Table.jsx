import React, {useState} from 'react';
import CoinRow from './CoinRow';

// Notes: 
// https://www.youtube.com/watch?v=dYjdzpZv5yc
// https://flaviocopes.com/react-update-while-rendering-different-component/

function Table(props) {
  const records = []
  const[coinArray, setCoinArray] = useState(props.data); 

  // ------------------ Add Coin ------------------ //
  const [name, setName] = useState(""); 
  const [amount, setamount] = useState(""); 

  function nameInput(event) {
    event.preventDefault()
    setName(event.target.value) 
  }

  function quantityInput(event) {
    event.preventDefault()
    setamount(event.target.value) 
  }

  function handleAddSubmit(event) {
    event.preventDefault();
    records.push({key: name, value: {"quantity": amount}}) 
    setCoinArray(records)
    setName(""); 
    setamount(""); 
  }

  return (
    <div>

      {/* ------------------ Add Coin Form ------------------ */}
      <div className="section">
        <div className="container">
          <h2>Add Coin</h2>
          <form onSubmit={handleAddSubmit}>
            <input 
              type="text" 
              placeholder='Name of coin...' 
              value={name}
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
      
      {/* ------------------ Table ------------------ */}
      <div className="table-section container"> 
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Symbol</th>
              <th scope="col">Amount</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {coinArray.map((value, index) => {
              return (
                <CoinRow 
                  key={index} 
                  num={index+1} 
                  name={value.key} 
                  amount={value.value.quantity} 
                />
              ); 
            })}
          </tbody>
        </table>
      </div>
    </div>
  );  
}
  
export default Table;