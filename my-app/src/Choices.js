import React, { Component } from 'react';
import Item from './Item.js';
import {data} from './fakemenuitems.js';

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'baseline'
};

class Choices extends Component {
    render() {

      return (
        <div>
        <div style={flexContainer}>
          <h1> DINNER TIME</h1>
        </div>
          <Item data = {data[0]} />
          <Item data = {data[1]} />
        </div>
      );
    }
}

export default Choices;
