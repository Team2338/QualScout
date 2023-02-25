import React from "react";
import { useState } from "react";
import { Button, Popover } from '@mui/material';



function AutoGridInfoButton() {
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
          <p>Press the button on the grid corresponding to where the robot placed their game piece.</p>
        </div>
      );
   

    return (
        <div>
             <Button onClick={handleClick}>
             🛈
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



export default AutoGridInfoButton;