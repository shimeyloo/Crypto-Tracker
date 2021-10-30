import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Portfolio.css';
import DeleteButton from './DeleteButton';
import brokenIMG from '../../images/brokenIMG.png' 

function CoinRow(props) {
  
    const [logo, setLogo] = useState([brokenIMG]); 
    const [symbol, setSymbol] = useState([""]); 
    const [price, setPrice] = useState([""]); 
    const [total, setTotal] = useState([""]);
  
    useEffect(() => {
  
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/'+props.data.name.toLowerCase()+'?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'
        )
        .then(res => {;
          props.updateData()
          setLogo(res.data.image.thumb); 
          setSymbol(res.data.symbol.toUpperCase());
          setPrice(res.data.market_data.current_price.usd);
          
          const totalCalc = function totalCalculation() {
            let x = Number(res.data.market_data.current_price.usd)
            let y = Number(props.data.value.quantity)
            let z = x * y 
            props.sumWorth(z)
            return z.toLocaleString()
          }
          setTotal(totalCalc)
        })
        .catch(error => console.log(error));
    }, []);
    
    return(
      <tr>
        <th scope="row">{props.num}</th>
        <td>
          <img className="coin-logo" src={logo} alt="Logo" />
          {props.data.name}
        </td>
        <td>{symbol}</td>
        <td>{props.data.value.quantity}</td>
        <td>$ {price}</td>
        <td>$ {total}</td>
        <td>
          <DeleteButton pos={props.num-1} total={total} deleteCoin={props.deleteCoin}/>
          <button>Edit</button>
        </td>
      </tr>
    )
}

export default CoinRow;