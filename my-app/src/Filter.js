import React, { Component } from 'react';

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'baseline'
};


class Filter extends Component {
    render() {

      return (
        <div>
        <div style={flexContainer}>
          <h1> DINNER TIME</h1>
          <a href="/#/choices">Take me to choices!</a>
        </div>

        </div>
      );
    }
}

export default Filter;
