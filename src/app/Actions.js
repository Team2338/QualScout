export const ActionTypes = {
  RESET_STATE: '[GLOBAL] Reset state',
  ACTIVATE_AUTO_NODE: '[GRID] Activate auto node',
  ACTIVATE_TELEOP_NODE: '[GRID] Activate teleop node',
  DEACTIVATE_NODE: '[GRID] Deactivate auto node',
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
  const type = (gamemode === 'teleop') ? ActionTypes.ACTIVATE_TELEOP_NODE : ActionTypes.ACTIVATE_AUTO_NODE;
  return {
    type: type,
    payload: index
  };
};

export const deactivateNode = (index) => {
  return {
    type: ActionTypes.DEACTIVATE_NODE,
    payload: index
  };
};
