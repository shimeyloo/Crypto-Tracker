import React, {useState, useEffect} from 'react';
import axios from 'axios';


function TotalWorth(props) {
  
    const [totalValue, setTotalValue] = useState(0); 
    let tempTotalValue = 0  

    useEffect(() => {

      props.data.map(value => {
        axios
          .get(
            'https://api.coingecko.com/api/v3/coins/'+value.key.toLowerCase()+'?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'
          )
          .then(res => {
            tempTotalValue += res.data.market_data.current_price.usd * value.value.quantity
            setTotalValue(tempTotalValue)
          })
          .catch(error => console.log(error));
        })        
    }, []);
    
    return (
      <div className="section">
        <div className="container">
          <h2>Total: </h2>
          <h2>$ {totalValue.toLocaleString()}</h2>
        </div>
      </div>
    );
  } 
  
  export default TotalWorth;