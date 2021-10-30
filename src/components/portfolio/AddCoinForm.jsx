import React, {useState} from 'react';

function AddCoinForm (props) {

    const [name, setName] = useState(""); 
    const [amount, setamount] = useState(""); 
    function nameInput(event) {
        event.preventDefault()
        setName(event.target.value) 
    }
    function quantityInput(event) {
        event.preventDefault()
        setamount(event.target.value) 
    }

    function handleAddSubmit(event) {
        event.preventDefault();
        props.addCoin(name, amount)
        setName(""); 
        setamount(""); 
    }


    return(
      <div className="section">
        <div className="container">
          <h2>Add Coin</h2>
          <form onSubmit={handleAddSubmit}>
            <input 
              type="text" 
              placeholder='Name of coin...' 
              value={name}
              onChange={nameInput}
            ></input>
            <input 
              type="number" 
              placeholder='Amount you own...' 
              value={amount}
              onChange={quantityInput} 
            ></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    ); 
}

export default AddCoinForm;