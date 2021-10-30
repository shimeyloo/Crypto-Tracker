import React, {useState} from 'react';
import './Portfolio.css';
import TotalWorth from './TotalWorth';
import Table from './Table'; 
import AddCoinForm from './AddCoinForm';
import brokenIMG from '../../images/brokenIMG.png' 

function Portfolio() {

  // Portfolio's Records
  const records = [
    {inputName: "Bitcoin", value: {"id":"", "symbol":"", "quantity": "13", "price": "", "totalWorth": "", "logo": brokenIMG}}, 
    {inputName: "Ethereum", value: {"id":"", "symbol":"", "quantity": '53', "price": "", "totalWorth": "", "logo": brokenIMG}},
    {inputName: "Tron", value: {"id":"", "symbol":"", "quantity": '769', "price": "", "totalWorth": "", "logo": brokenIMG}}
  ]
  const [data, setData] = useState(records); 

  // Update records and set data 
  function updateData(pos, id, symbol, logo, price, total) {
    records[pos].value.id = id
    records[pos].value.symbol = symbol.toUpperCase()
    records[pos].value.logo = logo
    records[pos].value.price = price
    records[pos].value.totalWorth = total
    
    setData(prevCoins => {
      return [...prevCoins]
    })
  }

  // Total Worth 
  const [totalWorth, setTotalWorth] = useState(0);
  let tempAmount = totalWorth
  function sumWorth(newAmount) {
    tempAmount += newAmount
    setTotalWorth(tempAmount)
  }

  // Adding new coin 
  function addCoin(input, quantity, id, symbol, logo, price, total) {
    let newData = {inputName: input, value: {"id":id, "symbol":symbol.toUpperCase(), "quantity": quantity, "price": price, "totalWorth": total, "logo": logo}}
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