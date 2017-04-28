import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {data} from './fakemenuitems.js';

console.log(data);

ReactDOM.render(
  <App data = {data}/>,
  document.getElementById('root')
);
