import React from 'react';
import './Portfolio.css';

function TotalWorth(props) {

    return (
      <div className="section">
        <div className="container total-container">
          <h2 className="total-title">Total: </h2>
          <h2>$ {props.totalWorth.toLocaleString()}</h2>
        </div>
      </div>
    );
} 
  
export default TotalWorth;