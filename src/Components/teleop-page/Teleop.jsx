import React from 'react';
import Button from '@mui/material/Button';
import './Teleop.scss';
import CombinedButtons from './CombinedButtons';



class Teleop extends React.Component {
    render() {
        return ( 
            <div class='background'>
         <h1 class='text'>Teleop</h1>

            <h3 class='placed'>Game Piece Placement</h3>
            <CombinedButtons />

         <h3 class='dock'>Docked</h3>
         <div>
            <Button variant='outlined'>None</Button>
            <Button variant='contained'>Parked</Button>
            <Button variant='contained'>Docked Unengaged</Button>
            <Button variant='contained'>Docked Engaged</Button>
         </div>
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