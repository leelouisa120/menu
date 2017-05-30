import React, { Component } from 'react';
import Item from './Item.js';
import {data} from './fakemenuitems.js';

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



class Choices extends Component {
    render() {
      const inputConstraints = window.data.getAll("constraint");
      const diningHalls = Object.keys(data);
      return (
        <div>
        <div style={flexContainer}>
            <div style={flexItem} id = "clockbox"></div>
        </div>

        <div style={flexContainer}>
            <div style={flexItem} id = "mealtime"></div>
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
  selectItem = () => {
      alert('Eat at ' + this.props.hall + ' !');
    }
  render() {
    return (
      <div  style={{...flexContainer, flexDirection: 'row',backgroundColor:'white', alignItems:'left', padding: '1em'}} onClick={this.selectItem}>
        <div style= {{...flexItem, color: 'black'}}>{this.props.hall}</div>
        <div style= {{...flexItem, color: 'black', fontSize: '1em',textAlign:'right' }}>
        {
          data[this.props.hall].filter(menuItem => {
            //the array providing items to check in menuItem.constraint
            if (this.props.constraints.length) {
              return this.props.constraints.some(v => {
                //array to search
                return menuItem.constraint.indexOf(v) >= 0;
              })
            } else {
              return menuItem;
            }
          }).map(menuItem => {

            return (
                <Item data={menuItem}/>
            )
          })
        }
        </div>
      </div>
    );
  }
}

{/*class Link extends Component{
  getInitialState: function(){
    return {hover: false}
  },
  getInitialState: function(){
    return {hover: false}
  },
  toggleHover: function(){
    this.setState({hover: !this.state.hover})
  },

  render: function() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {backgroundColor: 'red'}
    } else {
      linkStyle = {backgroundColor: 'blue'}
    }
    return(
      <div>
        <a style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>Link</a>
      </div>
    );
  }
}*/}

export default Choices;
