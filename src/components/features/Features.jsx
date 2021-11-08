import React from 'react';
import './Features.css'
import EachFeature from './EachFeature';

import addVideo from '../../images/Add.mp4'
import DeleteVideo from '../../images/Delete.mp4'
import ChangeCurrencyVideo from '../../images/ChangeCurrency.mp4'
import SearchVideo from '../../images/Search.mp4'

function Features() {
  return (
    <div className="section features-section">
      <h1 className="page-title container">F E A T U R E S</h1>
      <EachFeature 
        title="ADD a coin" 
        subTitle="How to add a coin:"
        step1 = 'Step 1. Go to the "Portfolio" Page.'
        step2 = 'Step 2. Under "Add Coin: ", enter name of coin.'
        step3 = 'Step 3. Enter amount of that specific coin.'
        step4 = 'Step 4. Click on "Submit".'
        video={addVideo} 
      />
      <EachFeature 
        title="DELETE a coin" 
        subTitle="How to delete a coin:" 
        step1 = 'Step 1. Go to the "Portfolio" Page.'
        step2 = 'Step 2. Go to the table.'
        step3 = 'Step 3. Find the coin you would like to delete.'
        step4 = 'Step 4. Click on "Delete".'
        video={DeleteVideo} 
      />
      <EachFeature 
        title="Change CURRENCY" 
        subTitle="How to change the currency:" 
        step1 = 'Step 1. Go to the "Portfolio" Page.'
        step2 = 'Step 2. Under "Choose a currency: ", choose the currency.'
        step3 = 'Step 3. The total worth will convert automatically.'
        step4 = ''
        video={ChangeCurrencyVideo}
      />
      <EachFeature 
        title="SEARCH for a coin" 
        subTitle="How to search for a specific coin:" 
        step1 = 'Step 1. Go to the "Search" Page.'
        step2 = 'Step 2. Under "Enter coin name: ", enter the name of the coin. As you enter the name, the table will automacally filter the results.'
        step3 = ''
        step4 = ''
        video={SearchVideo} 
      />
    </div>
  );
}

export default Features;