import React, { Component } from 'react';

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'baseline'
};
const flexItem = {
  margin: '5',
  //flexGrow: '1',
};


class Item extends Component {


  render() {
    return (
      <div style = {flexContainer}>
      {/*
      <div style = {flexItem}>
        <h2>{this.props.data["dininghall"]}</h2>
      </div>
      */}
      <div style = {flexItem}>
        {this.props.data["foodname"]}
      </div>
      </div>
    );
  }
}

export default Item;
