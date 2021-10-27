import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Portfolio.css';
// import Navbar from './Navbar';
// import brokenIMG from '../images/brokenIMG.png' 

const records = [{key: "Bitcoin", value: {"quantity": '12'}}, {key: "Ethereum", value: {"quantity": '543'}}]

function AddForm(props) {

  const [name, setName] = useState(""); 
  const [amount, setamount] = useState(""); 

  function nameInput(event) {
    setName(event.target.value ) 
  }
  function quantityInput(event) {
    setamount(event.target.value ) 
  }

  function addCoin(event) {
    event.preventDefault();
    records.push({key: name, value: {"quantity": amount}}) 
    console.log(records)
  }

  return (
    <div className="section">
      <div className="container">
        <h1>Add Coin</h1>
        <form>
          <h3>Name:</h3> 
          <input onChange={nameInput} type="text" placeholder='Bitcoin' value={name}></input>
          <h3>Amount:</h3> 
          <input onChange={quantityInput} type="number" placeholder='100.00' value={amount}></input>
          <button onClick={addCoin} >Submit</button>
        </form>
      </div>
    </div>
  )
}

function CoinRow(props) {

  // const [coins, setCoins] = useState([""]);
  const [name, setName] = useState([""]); 
  const [symbol, setSymbol] = useState([""]); 
  const [price, setPrice] = useState([""]); 
  const [total, setTotal] = useState([""]); 

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/'+props.name.toLowerCase()+'?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'
      )
      .then(res => {
        // setCoins(res.data);
        console.log(res.data);
        setName(res.data.name)
        setSymbol(res.data.symbol.toUpperCase())
        setPrice(res.data.market_data.current_price.usd)

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
  
  return(
    <tr>
      <th scope="row">{props.num}</th>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>{props.amount}</td>
      <td>$ {price}</td>
      <td>$ {total}</td>
      <td>
        <button>Delete</button>
        <button>Edit</button>
      </td>
    </tr>
  )
}

function TableBody() {

  // const[coinArray, setCoinArray] = useState(records); 
  
  return (
    <tbody>
      {records.map(value => {
        return (
          <CoinRow 
            key={value.key} 
            num="1" 
            name={value.key} 
            amount={value.value.quantity} 
          />
        ); 
      })}
    </tbody>
  ); 
}

function Table() {
  return (
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
        <TableBody />
      </table>
    </div>
  );  
}

function Portfolio() {

  return (
    <div className="portfolio-container section" id="portfolio">
      {/* <Navbar /> */}
      <AddForm />
      <Table />
    </div>
  );
}

export default Portfolio;