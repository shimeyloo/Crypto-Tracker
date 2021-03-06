import React from 'react';
import CoinRow from './CoinRow';

// Notes: 
// https://flaviocopes.com/react-update-while-rendering-different-component/

function Table(props) {

  return (
    <div>
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
            {props.data.map((value, index) => {
              return (
                <CoinRow 
                  key={index} 
                  num={index} 
                  data={value}
                  updateData={props.updateData}
                  addWorth={props.addWorth}
                  deleteCoin={props.deleteCoin}
                  editCoin={props.editCoin}
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