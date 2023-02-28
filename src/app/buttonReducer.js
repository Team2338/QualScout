import { ActionTypes } from './buttonActions.js';

function generateNodeStates() {
  const states = [];
  for (let i = 0; i < 27; i++) {
    states.push({
      disabled: false,
      value: 0
    });
  }

  return states;
}

const initialState = {
  teleop: {
    grid: generateNodeStates()
  },
  auto: {
    grid: generateNodeStates()
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RESET_STATE:
      return initialState;
    case ActionTypes.ACTIVATE_NODE:
      return handleActivateNode(state, action);
    case ActionTypes.DEACTIVATE_NODE:
      return handleDeactivateNode(state, action);
  }

  return state;
}

function getOtherMode(gamemode) {
  if (gamemode === 'auto') {
    return 'teleop';
  }

  return 'auto';
}

function handleActivateNode(state, action) {
  const gamemode = action.payload.gamemode;
  const otherMode = getOtherMode(gamemode);

  const gamemodeGrid = state[gamemode].grid.slice();
  gamemodeGrid[action.payload.index] = {
    disabled: false,
    value: 1
  };

  const otherGrid = state[otherMode].grid.slice();
  otherGrid[action.payload.index] = {
    disabled: true,
    value: 0
  };

  return {
    ...state,
    [gamemode]: {
      ...state[gamemode],
      grid: gamemodeGrid
    },
    [otherMode]: {
      ...state[otherMode],
      grid: otherGrid
    }
  };
}

function handleDeactivateNode(state, action) {
  const gamemode = action.payload.gamemode;
  const otherMode = getOtherMode(gamemode);

  const gamemodeGrid = state[gamemode].grid.slice();
  gamemodeGrid[action.payload.index] = {
    disabled: false,
    value: 0
  };

  const otherGrid = state[otherMode].grid.slice();
  otherGrid[action.payload.index] = {
    disabled: false,
    value: 0
  };

  return {
    ...state,
    [gamemode]: {
      ...state[gamemode],
      grid: gamemodeGrid
    },
    [otherMode]: {
      ...state[otherMode],
      grid: otherGrid
    }
  };
}
