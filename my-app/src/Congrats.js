import React, { Component } from 'react';
import Choices from './Choices.js';

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
    return (
      <div>
        <div style={flexContainer}>
            <div style={flexItem} id = "clockbox"></div>
        </div>

        <div style={flexContainer}>
            <div style={flexItem} id = "mealtime"></div>
        </div>
      </div>
    );
  }
}
