import React, { useState } from "react";
import { Button } from "@mui/material";



function Docked() {
    const [NoneVariant, SetNoneVariant] = useState("contained");
    const [UnengagedVariant, SetUnengagedVariant] = useState("outlined");
    const [EngagedVariant, SetEngagedVariant] = useState("outlined");


    const handleNoneClick = () => {
        if (NoneVariant === 'outlined') {
            SetNoneVariant('contained');
            SetUnengagedVariant('outlined');
            SetEngagedVariant('outlined');
        }
        
    }
    const handleUnengagedClick = () => {
        if (UnengagedVariant === 'outlined') {
            SetUnengagedVariant('contained');
            SetNoneVariant('outlined');
            SetEngagedVariant('outlined');
        }
    }
    const handleEngagedClick = () => {
        if (EngagedVariant === 'outlined') {
            SetEngagedVariant('contained');
            SetNoneVariant('outlined');
            SetUnengagedVariant('outlined');
        }
    }



    return (
        <div>
            <Button variant={NoneVariant} onClick={handleNoneClick}>None</Button>
            <Button variant={UnengagedVariant} onClick={handleUnengagedClick}>Docked Unengaged</Button>
            <Button variant={EngagedVariant} onClick={handleEngagedClick}>Docked Engaged </Button>
        </div>
    )
}



export default Docked;

