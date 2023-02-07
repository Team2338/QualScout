import React, { useState } from 'react';
import "./Auto.jsx"
import { Button } from '@mui/material';
import "./ButtonSpacing.scss"


function Mobility(props) {

const [YesVariant, setYesVariant] = useState("outlined");
const [NoVariant, setNoVariant] = useState("contained");

const handleYesClick = () => {
     if (YesVariant === 'outlined') {
        setYesVariant('contained');
        setNoVariant('outlined');
        props.addMobilityAuto();

    }
    

}

const handleNoClick = () => {
     if (NoVariant === 'outlined') {
        setNoVariant('contained');
        setYesVariant('outlined');
        props.removeMobilityAuto();
        
    }
    
}


    return (
        <div className='spacing'>
            <Button sx={{ m: 0.5 }} variant={NoVariant} onClick={handleNoClick}>No</Button>
            <Button sx={{ m: 0.5 }} variant={YesVariant} onClick={handleYesClick}>Yes</Button>
        </div>
    )
}



export default Mobility;