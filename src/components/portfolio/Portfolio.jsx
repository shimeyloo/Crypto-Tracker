import React, {useState} from 'react';
import './Portfolio.css';
import TotalWorth from './TotalWorth';
import Table from './Table'; 

function Portfolio() {

  const records = [{key: "Bitcoin", value: {"quantity": '13'}}, {key: "Ethereum", value: {"quantity": '53'}}]
  const [data, setData] = useState(records); 

  return (
    <div className="portfolio-container section" id="portfolio">
      <h1 className="page-title container">P O R T F O L I O</h1>
      <TotalWorth data={data} />
      <Table data={data} setData="setData"/>
    </div>
  );
}

export default Portfolio;