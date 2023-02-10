import React, { useState } from "react";
import { Button } from "@mui/material";



function DockedTeleop(props) {
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
            props.noDockTeleop();
        }
        
    }
    const handleUnengagedClick = () => {
        if (UnengagedVariant === 'outlined') {
            SetUnengagedVariant('contained');
            SetNoneVariant('outlined');
            SetEngagedVariant('outlined');
            SetParkedVariant('outlined');
            props.dockedTeleop();
        }
    }
    const handleEngagedClick = () => {
        if (EngagedVariant === 'outlined') {
            SetEngagedVariant('contained');
            SetNoneVariant('outlined');
            SetUnengagedVariant('outlined');
            SetParkedVariant('outlined');
            props.engagedTeleop();
        }
   


        }
        const handleParkedClick = () => {
            if (ParkedVariant === 'outlined') {
                SetParkedVariant('contained');
                SetEngagedVariant('outlined');
                SetNoneVariant('outlined');
                SetUnengagedVariant('outlined');
                props.parkedTeleop();
    }
    
    

        }


    return (
        <div className="spacing">
            <Button sx={{ m: 0.5 }} variant={NoneVariant} onClick={handleNoneClick}>None</Button>
            <Button sx={{ m: 0.5 }} variant={ParkedVariant} onClick={handleParkedClick}>Parked</Button>
            <Button sx={{ m: 0.5 }} variant={UnengagedVariant} onClick={handleUnengagedClick}>Docked Unengaged</Button>
            <Button sx={{ m: 0.5 }} variant={EngagedVariant} onClick={handleEngagedClick}>Docked Engaged </Button>
        </div>
    )
}



export default DockedTeleop;
