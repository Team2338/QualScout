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