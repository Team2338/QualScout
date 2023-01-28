import React, { useState } from 'react';
import { Button } from '@mui/material';


function Mobility() {

const [YesVariant, setYesVariant] = useState("outlined");
const [NoVariant, setNoVariant] = useState("contained");

const handleYesClick = () => {
     if (YesVariant === 'outlined') {
        setYesVariant('contained')
        setNoVariant('outlined')

    }
    

}

const handleNoClick = () => {
     if (NoVariant === 'outlined') {
        setNoVariant('contained');
        setYesVariant('outlined')

    }
    
}

    return (
        <div>
            <Button variant={NoVariant} onClick={handleNoClick}>No</Button>
            <Button variant={YesVariant} onClick={handleYesClick}>Yes</Button>
        </div>
    )
}



export default Mobility;