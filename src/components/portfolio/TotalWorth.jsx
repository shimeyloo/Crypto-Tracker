import React, {useEffect} from 'react';
import axios from 'axios';


function TotalWorth(props) {

    useEffect(() => {

      props.data.map(value => {
        axios
          .get(
            'https://api.coingecko.com/api/v3/coins/'+value.key.toLowerCase()+'?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'
          )
          .then(res => {
            let tempTotalValue = res.data.market_data.current_price.usd * value.value.quantity
            props.sumWorth(tempTotalValue)
          })
          .catch(error => console.log(error));
        })        
    }, []);
    
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