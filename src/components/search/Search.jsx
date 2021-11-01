import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Search.css';
import Coin from './Coin';

function Search() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
        <div className='coin-component section'>
          <div className='coin-search container'>
            <h1 className="page-title">S E A R C H</h1>
            <p className="search-coin">Enter coin name: </p>
            <div className='coin-form'>
              <form>
                <input
                  className='coin-input'
                  type='text'
                  onChange={handleChange}
                  placeholder='Search'
                />
              </form>
            </div> 
          </div>
          {filteredCoins.map(coin => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.total_volume}
                volume={coin.market_cap}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            );
        })}
        </div>
    </div>
    
  );
}

export default Search;