import React, { Component } from 'react';

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'baseline'
};
// Where to store the data
function nextPage(event){
  {/* Get form data
   Make sure that this data is not modified and is accessed before its written*/}
  window.data = new FormData(event.target.parentNode);
}

class Filter extends Component {
  render() {

    return (
      <div>
        <div style={flexContainer}>
          <h1>
            DINNER TIME
          </h1>
        </div>

        <form>
          <input type="checkbox" name="constraint" value="vegetarian"/>
          Vegetarian
          <input type="checkbox" name="constraint" value="halal"/>
          Halal
          <input type="checkbox" name="constraint" value="vegan"/>
          Vegan

          <a href="/#/choices" onClick={nextPage}>
            Take me to choices!
          </a>
        </form>
      </div>
    );
  }
}

export default Filter;
