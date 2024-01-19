import React, {useState} from "react";
import { Button, MenuItem, Select, Popover, FormControl, InputLabel } from "@mui/material";








 function CategoryInput() {
    
    const MenuItems = [ 
    "Select Category...", 
    "Auto", 
    "Collection", 
    "Shooting Position",
    "Shooting Consistency",
    "Path", 
    "Defense", 
    "Climbing" , 
    "Human Player" , 
    "Penalties",]
   const [buttonText, setButtonText] = useState(MenuItems[0]);
   const HelpItems = [
    "Select the category you would like to write your notes on above. ",
    "Note what the bot does during auto. Include starting position, path, scores, and possible A-STOPS. ",
    "Note how the bot collects. Examples: Floor intake, direct into robot, etc.",
    "Note where the bot likes to shoot towards the speaker and amp.",
    "Note how consistent the bot is shooting. Do they miss many shots?",
    "Note how the robot travels across the field, especially if they are able to travel under the chain.",
    "Note how the bot plays defense and its effectiveness (if applicable). Also note how the bot responds to defense and its effectiveness.",
    "Note how the robot climbs the chain. What mechanism do they use, and is it very sturdy? Can they climb with other bots on the same chain?" ,
    "Note how the team plays the human player. Where are they stationed? What do the do?  " ,
    "Note when and how the bot obtained any penalties. ",
  ]  
  
  const [helpText, setHelpText] = useState(HelpItems[0])
   const handleOptionChange = (event) => {
    const value = event.target.value;
    const index = MenuItems.indexOf(value);
    setButtonText(value)
      setHelpText(HelpItems[index])
  
  };
  
  

  const [Open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		setOpen(true);
	};
	const handleClose = () => {
		setAnchorEl(null);
		setOpen(false);
	};

   return ( 
    <>   
    <FormControl fullWidth>
      <InputLabel id='select label' style={{color:'#ff5000'}}>{MenuItems[0]}</InputLabel>
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
				open={Open}
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