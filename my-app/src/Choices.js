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
  constructor(props){
    super(props);
    this.state = {
        hover: false
    };
  }

  toggleHover = () => {
    this.setState({hover: !this.state.hover});
  }
  selectItem = () => {
      window.data = this.props.hall;
    }
  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {backgroundColor: '#EEEEEE'}
    } else {
      linkStyle = {backgroundColor: 'white'}
    }
    return (
      <a href="/#/congrats" style={{textDecoration: 'none'}}>

      <div  style={{...flexContainer, flexDirection: 'row',backgroundColor:'white', alignItems:'left', padding: '1em 1em 1em 2em', ...linkStyle}} onClick={this.selectItem} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <div style= {{...flexItem, color: 'black'}}>{this.props.hall}</div>
        <div style= {{...flexItem, color: 'black', fontSize: '1em',textAlign:'right', flexBasis: '27rem' }}>
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
    </a>
    );
  }
}



export default Choices;
