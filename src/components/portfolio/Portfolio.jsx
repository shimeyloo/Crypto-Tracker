import React, {useState} from 'react';
import './Portfolio.css';
import TotalWorth from './TotalWorth';
import Table from './Table'; 
import AddCoinForm from './AddCoinForm';

function Portfolio() {

  // Portfolio's Records
  const records = [{name: "Bitcoin", value: {"quantity": '13'}}, {name: "Ethereum", value: {"quantity": '53'}}, {name: "tron", value: {"quantity": '2'}}]
  const [data, setData] = useState(records); 

  // Total Worth 
  const [totalWorth, setTotalWorth] = useState(0);
  let tempAmount = 0 
  function sumWorth(newAmount) {
    tempAmount += newAmount
    setTotalWorth(tempAmount)
  }

  // Adding new coin 
  function addCoin(newCoinName, newCoinValue) {
    let newData = {name: newCoinName, value: {"quantity": newCoinValue}}
    records.push({name: newCoinName, value: {"quantity": newCoinValue}}) 
    setData(prevCoins => {
      return [...prevCoins, newData]
    })
  }

  return (
    <div className="portfolio-container section" id="portfolio">
      <h1 className="page-title container">P O R T F O L I O</h1>
      <TotalWorth data={data} totalWorth={totalWorth} sumWorth={sumWorth}/>
      <AddCoinForm data={data} addCoin={addCoin} />
      <Table data={data} />
    </div>
  );
}

export default Portfolio;