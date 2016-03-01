import { combineReducers } from 'redux';
import {
  START_TICK,
  STOP_TICK,
  NEXT_TICK,
  CHANGE_SPEED,
  stopTick
} from './actions';
import { calculateNextState } from './utils' ;

const initialState = {
  ticks: 0,
  running: false,
  cells: [],
  // cells: [
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  // ]
};

// Creating random
for (let i = 0; i < 30; i++) {
  if (!initialState.cells[i]) {
    initialState.cells[i] = [];
  }
  for (let j = 0; j < 30; j++) {
    initialState.cells[i][j] = Math.random() > .5 ? 1 : 0;
  }
}

const running = (state = initialState.running, action) => {
  switch (action.type) {
    case START_TICK:
      return true;
    case STOP_TICK:
      return false;
    default:
      return state;
  }
};

const ticks = (state = initialState.ticks, action) => {
  switch (action.type) {
    case NEXT_TICK:
      return ++state;
    default:
      return state;
  }
};

const cells = (state = initialState.cells, action) => {
  switch (action.type) {
  case NEXT_TICK:
    return calculateNextState(state);
  default:
    return state;
  }
};

export const appReducer = combineReducers({
  cells,
  running,
  ticks
});