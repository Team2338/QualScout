export const ActionTypes = {
  RESET_STATE: '[GLOBAL] Reset state',
  ACTIVATE_NODE: '[GRID] Activate node',
  DEACTIVATE_NODE: '[GRID] Deactivate node',
};

export const disableButton = (id) => {
    return {
      type: 'DISABLE_BUTTON',
      payload: id,
      
    }
  }


export const enableButton = (id) => {
  return {
    type: 'ENABLE_BUTTON',
    payload: id,
  }
}

export const resetState = () => {
  return {
    type: ActionTypes.RESET_STATE
  };
};

export const activateNode = (gamemode, index) => {
  return {
    type: ActionTypes.ACTIVATE_NODE,
    payload: {
      gamemode: gamemode,
      index: index
    }
  };
};

export const deactivateNode = (gamemode, index) => {
  return {
    type: ActionTypes.DEACTIVATE_NODE,
    payload: {
      gamemode: gamemode,
      index: index
    }
  };
};
