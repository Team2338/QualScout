import React from 'react';
import { ToggleButton } from '@mui/material';

let selected;
let setSelected;

class ButtonCheck extends React.Component {
    render() {
        return(
        <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
          </ToggleButton>)
    }
}



export default ButtonCheck; 