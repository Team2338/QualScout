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
            props.addPieceTopTeleop();
            props.gridA1Teleop()
        }
        else {
            setVariant('outlined');
            props.removePieceTopTeleop();
            props.gridA1Teleop()
        }
    }
    
    
    return (
            <div>
                <Button size='large' sx={{ m: -0.25 }} variant={variant} onClick={ChangeStyle} disabled={disabled}>.</Button>
            </div>
    )
}



export default ButtonChange;