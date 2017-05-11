import React, { Component } from 'react';
//Import routing components
import {HashRouter, Route,Link, IndexRoute, browserHistory } from 'react-router-dom';
import Filter from './Filter.js'
import Choices from './Choices.js';
import './App.css';

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
};

class App extends Component {

  render() {

    return (

      <HashRouter>
        <div>
          <Route exact path = "/" component={Filter} />
          <Route path = "/choices" component={Choices}/>
        </div>
      </HashRouter>

    );
  }
}

export default App;
