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
      const inputConstraints = window.data.getAll("constraint");
      const diningHalls = Object.keys(data);
      return (
        <div>
        <div style={flexContainer}>
          <h1> DINNER TIME</h1>
        </div>
        {/*}//how to get an array of halls from data (which is an object of items)
        //use map and then remove duplicates*/}
        {diningHalls.map(function (hall) {
          return <DiningHallOptions hall={hall} constraints={inputConstraints}/>
        })}

        </div>
      );
    }
}

class DiningHallOptions extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.hall}</h1>
        {
          data[this.props.hall].filter(menuItem => {
            //the array providing items to check in menuItem.constraint
            return this.props.constraints.some(v => {
              //array to search
              console.log(menuItem)
              console.log(menuItem.constraint.indexOf(v))
              return menuItem.constraint.indexOf(v) >= 0;
            })
          }).map(menuItem => {
            return <Item data={menuItem} />
          })
        }
      </div>
    );
  }
}

export default Choices;
