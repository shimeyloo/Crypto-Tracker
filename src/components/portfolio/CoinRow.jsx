import React, {useEffect} from 'react';
import axios from 'axios';
import './Portfolio.css';
import DeleteButton from './DeleteButton';

function CoinRow(props) {
  
    useEffect(() => {
  
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/'+props.data.inputName.toLowerCase()+'?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'
        )
        .then(res => {;
          let id = res.data.name
          let symbol = res.data.symbol
          let logo = res.data.image.thumb
          let price = res.data.market_data.current_price.usd
          
          const totalCalc = function totalCalculation() {
            let x = Number(res.data.market_data.current_price.usd)
            let y = Number(props.data.value.quantity)
            let z = x * y 
            props.sumWorth(z)
            return z.toLocaleString()
          }
          let total = totalCalc()

          props.updateData(props.num, id, symbol, logo, price, total)
        })
        .catch(error => console.log(error));
    }, []);
    
    return(
      <tr>
        <th scope="row">{props.num+1}</th>
        <td>
          <img className="coin-logo" src={props.data.value.logo} alt="Logo" />
          {props.data.value.id}
        </td>
        <td>{props.data.value.symbol}</td>
        <td>{props.data.value.quantity}</td>
        <td>$ {props.data.value.price}</td>
        <td>$ {props.data.value.totalWorth}</td>
        <td>
          <DeleteButton pos={props.num} total={props.data.value.totalWorth} deleteCoin={props.deleteCoin}/>
          <button>Edit</button>
        </td>
      </tr>
    )
}

export default CoinRow;