import React, {useState} from "react";
import { Button, MenuItem, Select, Popover, FormControl, InputLabel } from "@mui/material";








 function CategoryInput() {
    
    const MenuItems = [ "Select Category...", "Auto", "Collection", "Defense", "Endgame", "Path" , "Penalties" , "Placement"]
   const [buttonText, setButtonText] = useState(MenuItems[0]);
   const HelpItems = [
    "Select the category you would like to write your notes on above. ",
    "Auto help ",
    "Collection help",
    "Defense help",
    "Endgame help",
    "Path help" ,
    "Penalties help" ,
    "Placement help"
  ]  
  
  const [helpText, setHelpText] = useState(HelpItems[0])
   const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    const selectedIndex = MenuItems.indexOf(selectedValue);
    setButtonText(selectedValue)
      setHelpText(HelpItems[selectedIndex])
  
  };
  
  

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

   return ( 
    <>   
    <FormControl fullWidth>
      <InputLabel id='select label'>{MenuItems[0]}</InputLabel>
      <Select
      labelId="select-label"
      id="select"
      value={buttonText}
      onChange={handleOptionChange}
      renderValue={(value) => value}>
        {MenuItems.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    <Button onClick={handleClick}>
				?
			</Button>
			<Popover
				open={isOpen}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				PaperProps={{
					style: {
						color: '#FF5000',
						backgroundColor: '#01233D',
						padding: '2px'
					}
				}}
			>
				{helpText}
			</Popover>
    </>
   )

}

export default CategoryInput;