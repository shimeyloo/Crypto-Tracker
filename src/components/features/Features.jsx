import React from 'react';
import addVideo from '../../images/addVideo.mp4'
import './Features.css'
import EachFeature from './EachFeature';

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
        video={addVideo} 
      />
      <EachFeature 
        title="SEARCH for a coin" 
        subTitle="How to search for a specific coin:" 
        step1 = 'Step 1. Go to the "Search" Page.'
        step2 = 'Step 2. Under "Enter coin name: ", enter the name of the coin. As you enter the name, the table will automacally filter the results.'
        step3 = ''
        step4 = ''
        video={addVideo} 
      />
    </div>
  );
}

export default Features;