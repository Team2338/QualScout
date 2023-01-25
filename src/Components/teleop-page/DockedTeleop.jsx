import React, { useState } from "react";
import { Button } from "@mui/material";



function DockedTeleop() {
    const [NoneVariant, SetNoneVariant] = useState("contained");
    const [UnengagedVariant, SetUnengagedVariant] = useState("outlined");
    const [EngagedVariant, SetEngagedVariant] = useState("outlined");
    const [ParkedVariant, SetParkedVariant] = useState("outlined");


    const handleNoneClick = () => {
        if (NoneVariant === 'outlined') {
            SetNoneVariant('contained');
            SetUnengagedVariant('outlined');
            SetEngagedVariant('outlined');
            SetParkedVariant('outlined');
        }
        
    }
    const handleUnengagedClick = () => {
        if (UnengagedVariant === 'outlined') {
            SetUnengagedVariant('contained');
            SetNoneVariant('outlined');
            SetEngagedVariant('outlined');
            SetParkedVariant('outlined');
        }
    }
    const handleEngagedClick = () => {
        if (EngagedVariant === 'outlined') {
            SetEngagedVariant('contained');
            SetNoneVariant('outlined');
            SetUnengagedVariant('outlined');
            SetParkedVariant('outlined');
        }
   


        }
        const handleParkedClick = () => {
            if (ParkedVariant === 'outlined') {
                SetParkedVariant('contained');
                SetEngagedVariant('outlined');
                SetNoneVariant('outlined');
                SetUnengagedVariant('outlined');
    }
    
    

        }


    return (
        <div>
            <Button variant={NoneVariant} onClick={handleNoneClick}>None</Button>
            <Button variant={ParkedVariant} onClick={handleParkedClick}>Parked</Button>
            <Button variant={UnengagedVariant} onClick={handleUnengagedClick}>Docked Unengaged</Button>
            <Button variant={EngagedVariant} onClick={handleEngagedClick}>Docked Engaged </Button>
        </div>
    )
}



export default DockedTeleop;

