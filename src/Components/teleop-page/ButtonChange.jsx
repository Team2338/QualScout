import React, { useState } from 'react';
import { Button } from '@mui/material';


function ButtonChange() {
    const [variant, setVariant] = useState("outlined");

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
                <Button variant={variant} onClick={ChangeStyle}>.</Button>
            </div>
    )
}



export default ButtonChange;