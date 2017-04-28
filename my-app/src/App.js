import React, { Component } from 'react';
import Item from './Item.js';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Item data = {this.props.data[0]} />
      </div>
    );
  }
}

export default App;
