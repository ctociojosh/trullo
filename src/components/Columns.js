import React, { Component } from 'react';
import ColumnContainer from './column/ColumnContainer'
import './styles/Columns.css'

class Columns extends Component {
  render() {
    return (
      <div className="columns">
        {this.props.columns.map(column =>
          <ColumnContainer {...column} />)}
        <div className="new-list-composer list-wrapper">
          <input
            className="list-name-input"
            placeholder="Add a list..."
          />
          <div className="confirm">Save</div>
        </div>
      </div>
    );
  }
}

export default Columns;
