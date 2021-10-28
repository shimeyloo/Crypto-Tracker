import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Portfolio.css';
import brokenIMG from '../images/brokenIMG.png' 

// Notes: 
// https://www.youtube.com/watch?v=dYjdzpZv5yc

const records = [{key: "Bitcoin", value: {"quantity": '12'}}, {key: "Ethereum", value: {"quantity": '543'}}]


function CoinRow(props) {

  const [name, setName] = useState([""]); 
  const [logo, setLogo] = useState([brokenIMG]); 
  const [symbol, setSymbol] = useState([""]); 
  const [price, setPrice] = useState([""]); 
  const [total, setTotal] = useState([""]); 

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/'+props.name.toLowerCase()+'?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'
      )
      .then(res => {;
        console.log(res.data);
        setName(res.data.name);
        setLogo(res.data.image.thumb); 
        setSymbol(res.data.symbol.toUpperCase());
        setPrice(res.data.market_data.current_price.usd);

        const totalCalc = function totalCalculation() {
          let x = Number(res.data.market_data.current_price.usd)
          let y = Number(props.amount)
          let z = x * y 
          return z.toLocaleString()
        }
        setTotal(totalCalc)
      })
      .catch(error => console.log(error));
  }, []);

  function handleEditButton(event) {
    event.preventDefault()
    console.log("clicked", props.num)
  }
  
  return(
    <tr>
      <th scope="row">{props.num}</th>
      <td>
        <img className="coin-logo" src={logo} alt="Logo" />
        {name}
      </td>
      <td>{symbol}</td>
      <td>{props.amount}</td>
      <td>$ {price}</td>
      <td>$ {total}</td>
      <td>
        <button>Delete</button>
        <button onClick={handleEditButton}>Edit</button>
      </td>
    </tr>
  )
}

function Table() {
  const[coinArray, setCoinArray] = useState(records); 

  // ------------------ Add Coin ------------------ //
  const [name, setName] = useState(""); 
  const [amount, setamount] = useState(""); 

  function nameInput(event) {
    event.preventDefault()
    setName(event.target.value ) 
  }

  function quantityInput(event) {
    event.preventDefault()
    setamount(event.target.value ) 
  }

  function handleAddSubmit(event) {
    event.preventDefault();
    records.push({key: name, value: {"quantity": amount}}) 
    setCoinArray(records)
    setName(""); 
    setamount(""); 
  }

  // ------------------ Portfolio Total Value ------------------ //
  const [totalValue, settotalValue] = useState(0); 

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

      {/* ------------------ Portfolio Total Value ------------------ */}
      <div className="section">
        <div className="container">
          <h2>Total: </h2>
          <h2>$ {totalValue}</h2>
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
                  key={value.key} 
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

function Portfolio() {

  return (
    <div className="portfolio-container section" id="portfolio">
      <h1 className="page-title container">P O R T F O L I O</h1>
      <Table />
    </div>
  );
}

export default Portfolio;