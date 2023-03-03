import React from "react";
import { useState } from "react";
import { Button, Popover } from '@mui/material';



function AutoChargeStationInfoButton({text, showOnHover}) {
    const [isOpen, setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setIsOpen(true);
      };
      const handleClose = () => {
        setAnchorEl(null);
        setIsOpen(false);
      };

      const popoverContent = (
        <div>
          <p>Press the button that corresponds to where the robot ended up on the charge station.</p>
        </div>
      );
   

    return (
        <div>
             <Button onClick={handleClick}>
             ?
             </Button>
             <Popover
  open={isOpen}
  anchorEl={anchorEl}
  onClose={handleClose}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'center',
  }}
  PaperProps={{
    style: {
        color: '#ff5000',
        backgroundColor: '#01233d',
        padding: "2px"
    }
  }}
>
  {popoverContent}
</Popover>

        </div>
    )
}



export default AutoChargeStationInfoButton;