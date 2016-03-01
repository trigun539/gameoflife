import React, { Component } from 'react';
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import Board from './board';
import { startTick, stopTick, nextTick } from './../actions';
import { calculateNextState, compareStates } from './../utils';

export class App extends Component {
  render () {
    const { running, ticks, cells, startTick, stopTick, nextTick } = this.props;

    const nextState = calculateNextState(cells);
    const same      = compareStates(cells, nextState);

    if (running && !same) {
      let timeout = setTimeout(() => {
        nextTick();
        clearTimeout(timeout);
      }, 100);
    } else {
      let timeout = setTimeout(() => {
        stopTick();
        clearTimeout(timeout);
      }, 100);
    }

    return (
      <div id="app">
        <h1>Game of Life</h1>
        <button onClick={startTick}>Start Tick</button>
        <button onClick={stopTick}>Stop Tick</button>
        <h1>Ticks: { ticks }</h1>
        <Board cells={cells}/>
      </div>
    );
  }
}

function select (state) {
  return {
    ticks: state.ticks,
    running: state.running,
    cells: state.cells
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ startTick, stopTick, nextTick }, dispatch);
}

export default connect(select, mapDispatchToProps)(App);