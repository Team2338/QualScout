import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from '@mui/material';
import { Box } from "@mui/material";
import useState from "react";





 function CategoryInput() {
    /*
    create variable with array values Auto Collection Defense Endgame Path Penalties Placement
    create variable with no initial value
    create button with the text being said variable
    menu with menu items being the variables
    when item clicked it turns into that value
 
    */
    const MenuItems = [ "Select Category...", "Auto", "Collection", "Defense", "Endgame", "Path" , "Penalties" , "Placement"]
   const [buttonText, setButtonText] = useState(MenuItems[0]);
   const handleOptionChange = (event) => {
    setButtonText(event.target.value);
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
    </>
   )

}

export default CategoryInput;