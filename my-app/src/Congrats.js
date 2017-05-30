import React, { Component } from 'react';
import DiningHallOptions from './Choices.js';


const flexContainer = {
  background:'tomato',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const flexItem = {
  color: 'white',
  fontSize: '3em',
  textAlign: 'left'
};

class Congrats extends Component{
  render(){
    const dininghall = window.data;
    return (
      <div>
        <div style={flexContainer}>
            <div style={flexItem} id = "clockbox"> </div>
        </div>

        <div style={flexContainer}>
            <div style={flexItem} id = "mealtime"> </div>
        </div>

        <div style={{...flexContainer, backgroundColor: 'white'}}>
          <h1> Have a great meal at </h1>
          <div style={{...flexItem, color: 'tomato', fontSize: '4em', fontWeight: 'bold'}}>
            {dininghall} 
          </div>
          <h2>
            Ends at 8:00 PM.
          </h2>
        </div>
      </div>
    );
  }
}

export default Congrats;
