import React from 'react';
import Navbar from './Navbar';
import './Portfolio.css';

function AddForm(props) {
  return (
    <div className="section">
      <div className="container">
        <h1>Add Coin</h1>
        <form>
          Name: 
          <input type="text" placeholder='Bitcoin'></input>
          Amount: 
          <input type="number" placeholder='100.00'></input>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  )
}

function Table() {
  return (
    <div className="table-section container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Amout</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Bitcoin</td>
            <td>1</td>
            <td></td>
            <td></td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );  
}

function Portfolio() {
  return (
    <div className="portfolio-container section" id="portfolio">
      <Navbar />
      <AddForm />
      <Table />
    </div>
  );
}

export default Portfolio;