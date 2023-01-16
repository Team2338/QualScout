import React from 'react';
import Button from '@mui/material/Button'


import './Teleop.scss';



class Teleop extends React.Component {
    render() {
        return ( 
            <div class='background'>
         <h1 class='text'>Teleop</h1>
      
         <h3 class='bottom-row'>Bottom Row</h3>
         <Button variant='contained'>Add</Button>
         <Button variant='outlined'>Remove</Button>
         <h3 class='middle-row'>Middle Row</h3>
         <Button variant='contained'>Add</Button>
         <Button variant='outlined'>Remove</Button>
         <h3 class='top-row'>Top Row</h3>
         <Button variant='contained'>Add</Button>
         <Button variant='outlined'>Remove</Button>
         <h3 class='link'>Link Bonus</h3>
         <Button variant='contained'>Add</Button>
         <Button variant='outlined'>Remove</Button>

         <h3 class='dock'>Docked</h3>
         <Button variant='outlined'>None</Button>
         <Button variant='contained'>Parked</Button>
         <Button variant='contained'>Docked Unengaged</Button>
         <Button variant='contained'>Docked Engaged</Button>
        </div>

        )
    }
}



export default Teleop;
   /* 3 types of game pieces: Hybrid, cube, and cone
            Teleop scores:
            bottom row: 2 
            middle row: 3
            top row: 5
            Link bonus: 5
            Docked unengaged: 6
            Docked engaged: 10 
            Park: 2

         */