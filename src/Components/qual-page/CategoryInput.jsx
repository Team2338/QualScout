import React from "react";
import { Button } from "@mui/material";
import Menu from "@mui/material";
import MenuItem from "@mui/material";




export default function CategoryInput() {
    /*
    create variable with array values Auto Collection Defense Endgame Path Penalties Placement
    create variable with no initial value
    create button with the text being said variable
    menu with menu items being the variables
    when item clicked it turns into that value
 
    */
    const MenuItems = [ "Select Category...", "Auto", "Collection", "Defense", "Endgame", "Path" , "Penalties" , "Placement"]
   const ButtonText = "Select Category...";

function CreateMenuItems() {
    
    // 7 variables, end loop after that// 
    for (let count = 0; count < MenuItem.length; count++ ) {
        
        <MenuItem>
        MenuItems[count]
        </MenuItem>
    }


}

   return ( 
    <>   
    <Button variant="outlined"><ButtonText /></Button>
    <Menu>
        <CreateMenuItems />
    </Menu>
    </>
   )

}