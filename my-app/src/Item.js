import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <dl>
        {Object.keys(this.props.data).map((field) =>
          <div>
            <dt> {field} </dt>
            <dd> {this.props.data[field]} </dd>
          </div>
        )}
      </dl>

      //<div> {this.props.data.foodName} </div>

    );
  }
}

export default Item;
