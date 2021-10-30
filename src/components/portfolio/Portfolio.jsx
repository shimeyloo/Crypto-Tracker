import React, {useState} from 'react';
import './Portfolio.css';
import TotalWorth from './TotalWorth';
import Table from './Table'; 
import AddCoinForm from './AddCoinForm';
import brokenIMG from '../../images/brokenIMG.png' 

function Portfolio() {

  // Portfolio's Records
  const records = [
    {name: "Bitcoin", value: {"id":"", "symbol":"", "quantity": "13", "price": "", "totalWorth": "", "logo": brokenIMG}}, 
    {name: "Ethereum", value: {"id":"", "symbol":"", "quantity": '53', "price": "", "totalWorth": "", "logo": brokenIMG}}
  ]
  const [data, setData] = useState(records); 

  // Update records and set data 
  function updateData() {
    console.log("something is happening")
  }

  // Total Worth 
  const [totalWorth, setTotalWorth] = useState(0);
  let tempAmount = totalWorth
  function sumWorth(newAmount) {
    tempAmount += newAmount
    setTotalWorth(tempAmount)
  }

  // Adding new coin 
  function addCoin(newCoinName, newCoinValue) {
    let newData = {name: newCoinName, value: {"id":"", "symbol":"", "quantity": newCoinValue, "price": "", "totalWorth": "", "logo": brokenIMG}}
    records.push(newData) 
    setData(prevCoins => {
      return [...prevCoins, newData]
    })
  }

  // Deleting coin 
  function deleteCoin(pos) {
    setData(prevData => {
      return prevData.filter(
        (item, index) => {
          return index !== pos; 
        }
      )
    }); 
  }

  return (
    <div className="portfolio-container section" id="portfolio">
      <h1 className="page-title container">P O R T F O L I O</h1>
      <TotalWorth data={data} totalWorth={totalWorth} />
      <AddCoinForm data={data} addCoin={addCoin} />
      <Table 
        data={data} 
        sumWorth={sumWorth} 
        deleteCoin={deleteCoin} 
        updateData={updateData}
      />
    </div>
  );
}

export default Portfolio;