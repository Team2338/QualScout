import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';


function ButtonChange(props) {
    const [variant, setVariant] = useState("outlined");
    const disabled = useSelector(state => state.buttons.find( button => button.id === props.id).disabled);



    const ChangeStyle = () => {
        if (variant === 'outlined') {
            setVariant('contained');
        }
        else {
            setVariant('outlined');
        }
    }
    
    
    return (
            <div>
                <Button variant={variant} onClick={ChangeStyle} disabled={disabled}>.</Button>
            </div>
    )
}



export default ButtonChange;