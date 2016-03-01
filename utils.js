// Gets live neighbors for a cell
const getLiveNeighbors = (i, j, board) => {
  let liveNeighbors = 0;
  const neighbors = [
    // If neighbors are outside the board, they are seen as dead cells.
    board[i-1] && (board[i-1][j] === 0 || board[i-1][j] === 1) ? board[i-1][j] : 0,
    board[i+1] && (board[i+1][j] === 0 || board[i+1][j] === 1) ? board[i+1][j] : 0,

    board[i][j-1] && (board[i][j-1] === 0 || board[i][j-1] === 1) ? board[i][j-1] : 0,
    board[i][j+1] && (board[i][j+1] === 0 || board[i][j+1] === 1) ? board[i][j+1] : 0,

    board[i-1] && (board[i-1][j-1] === 0 || board[i-1][j-1] === 1) ? board[i-1][j-1] : 0,
    board[i+1] && (board[i+1][j-1] === 0 || board[i+1][j-1] === 1) ? board[i+1][j-1] : 0,

    board[i-1] && (board[i-1][j+1] === 0 || board[i-1][j+1] === 1) ? board[i-1][j+1] : 0,
    board[i+1] && (board[i+1][j+1] === 0 || board[i+1][j+1] === 1) ? board[i+1][j+1] : 0
  ];

  // Counting live neighbors
  for (let k = 0; k < neighbors.length; k++) {
    if (neighbors[k] === 1) {
      liveNeighbors++;
    }
  }

  return liveNeighbors;
};

// Comparing old / new states => true if same, false otherwise
export const compareStates = (oldState, newState) => {
  let same = true;

  for (let i = 0; i < oldState.length; i++) {
    for (let j = 0; j < oldState[i].length; j++) {
      if (oldState[i][j] !== newState[i][j]) {
        same = false;
        break;
      }
    }

    if (!same) {
      break;
    }
  }

  return same;
};

// Returns next state, gets old state
export const calculateNextState = (state) => {
  let newState = [];

  for (let i = 0; i < state.length; i++) {
    let newRow = [];

    for (let j = 0; j < state[i].length; j++) {
      let cell = state[i][j];
      let liveNeighbors = getLiveNeighbors(i, j, state);

      // under-population.
      if (liveNeighbors < 2 && cell === 1) {
        cell = 0;
      }

      // next generation.
      if ( 2 <= liveNeighbors <= 3 && cell === 1) {
        cell = 1;
      }

      // over-population.
      if (liveNeighbors > 3 && cell === 1) {
        cell = 0;
      }

      // reproduction.
      if (liveNeighbors == 3 && cell === 0) {
        cell = 1;
      }

      newRow.push(cell);
    }
    newState.push(newRow);
  }

  return newState;
}