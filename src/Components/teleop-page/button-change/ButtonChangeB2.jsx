import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { prepareAutoBatched } from '@reduxjs/toolkit';


function ButtonChange(props) {
    const [variant, setVariant] = useState("outlined");
    const disabled = useSelector(state => state.buttons.find( button => button.id === props.id).disabled);



    const ChangeStyle = () => {
        if (variant === 'outlined') {
            setVariant('contained');
            props.addPieceMiddleTeleop();
            props.gridB2Teleop()
        }
        else {
            setVariant('outlined');
            props.removePieceMiddleTeleop();
            props.gridB2Teleop()
        }
    }
    
    
    return (
            <div>
                <Button variant={variant} onClick={ChangeStyle} disabled={disabled}>.</Button>
            </div>
    )
}



export default ButtonChange;