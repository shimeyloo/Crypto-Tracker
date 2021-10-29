import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Portfolio.css';
import brokenIMG from '../../images/brokenIMG.png' 

function CoinRow(props) {
  
    const [name, setName] = useState([""]); 
    const [logo, setLogo] = useState([brokenIMG]); 
    const [symbol, setSymbol] = useState([""]); 
    const [price, setPrice] = useState([""]); 
    const [total, setTotal] = useState([""]); 
  
    useEffect(() => {
  
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/'+props.name.toLowerCase()+'?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'
        )
        .then(res => {;
          setName(res.data.name);
          setLogo(res.data.image.thumb); 
          setSymbol(res.data.symbol.toUpperCase());
          setPrice(res.data.market_data.current_price.usd);
          
          const totalCalc = function totalCalculation() {
            let x = Number(res.data.market_data.current_price.usd)
            let y = Number(props.amount)
            let z = x * y 
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
          {name}
        </td>
        <td>{symbol}</td>
        <td>{props.amount}</td>
        <td>$ {price}</td>
        <td>$ {total}</td>
        <td>
          <button>Delete</button>
          <button>Edit</button>
        </td>
      </tr>
    )
}

export default CoinRow;