import React, { Component } from 'react';
import Cell from './cell';

export default class Row extends Component {
  render () {
    const { row, cells } = this.props;
    const theCells  = [];

    for (let i = 0; i < cells.length; i++) {
      theCells.push(<Cell key={`row-${row}-cell-${i}`} value={cells[i]} />);
    }

    return (
      <div className="row">
        {theCells}
      </div>
    );
  }
}