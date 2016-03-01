import React, { Component } from 'react';

export default class Cell extends Component {
  render () {
    const { value } = this.props;

    return (
      <div className={value === 1 ? 'cell' : 'cell dead'}></div>
    );
  }
}