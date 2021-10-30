import React from 'react';


function TotalWorth(props) {

    return (
      <div className="section">
        <div className="container">
          <h2>Total: </h2>
          <h2>$ {props.totalWorth.toLocaleString()}</h2>
        </div>
      </div>
    );
} 
  
export default TotalWorth;