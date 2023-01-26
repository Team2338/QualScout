
const initialState = {
    buttons: [
      { id: 1, disabled: false },
      { id: 2, disabled: false },
      { id: 3, disabled: false },
      { id: 4, disabled: false },
      { id: 5, disabled: false },
      { id: 6, disabled: false },
      { id: 7, disabled: false },
      { id: 8, disabled: false },
      { id: 9, disabled: false },
      { id: 10, disabled: false },
      { id: 11, disabled: false },
      { id: 12, disabled: false },
      { id: 13, disabled: false },
      { id: 14, disabled: false },
      { id: 15, disabled: false },
      { id: 16, disabled: false },
      { id: 17, disabled: false },
      { id: 18, disabled: false },
      { id: 19, disabled: false },
      { id: 20, disabled: false },
      { id: 21, disabled: false },
      { id: 22, disabled: false },
      { id: 23, disabled: false },
      { id: 24, disabled: false },
      { id: 25, disabled: false },
      { id: 26, disabled: false },
      { id: 27, disabled: false },
    ]
  }
  
  export function buttonReducer(state = initialState, action) {
    switch (action.type) {
      case 'DISABLE_BUTTON':
        return {
          ...state,
          buttons: state.buttons.map(button => {
            if (button.id === action.payload) {
              return { ...button, disabled: true }
            }
            return button
          })
        }
      default:
        return state;
    }
  }
  