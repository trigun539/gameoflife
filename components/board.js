import React, { Component } from 'react';
import Row from './row';

export default class Board extends Component {
  render () {
    const { cells } = this.props;
    const theRows = [];

    for (let i = 0; i < cells.length; i++) {
      theRows.push(<Row key={`row-${i}`} row={i} cells={cells[i]} />);
    }

    return (
      <div id="board">
        {theRows}
      </div>
    );
  }
};