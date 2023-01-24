import React, { useState } from 'react';
import { Button } from '@mui/material';


function Mobility() {

const [YesVariant, setYesVariant] = useState("contained");
const [NoVariant, setNoVariant] = useState("outlined");

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
            <Button variant={YesVariant} onClick={handleYesClick}>Yes</Button>
            <Button variant={NoVariant} onClick={handleNoClick}>No</Button>
        </div>
    )
}



export default Mobility;