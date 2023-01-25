import React from 'react';
import Button  from '@mui/material/Button';

import './Auto.scss';
import CombinedButtons from './CombinedButtons';


class Auto extends React.Component { 
    render() {
        return(
            <div class='background'>
                <h1 className='text'>Auto</h1>
                <h3>Mobile</h3>
                <div>
                    <Button variant='contained'>Yes</Button>
                    <Button variant='outlined'>No</Button>
                </div>
               <h3>Game Piece Placement</h3>
                <CombinedButtons />
                <h3>Docked</h3>
                <div>
                    <Button variant='outlined'>None</Button>
                    <Button variant='contained'>Docked Unengaged</Button>
                    <Button variant='contained'>Docked Engaged</Button>
                </div>
            </div>
        )
    }
   
}



export default Auto;


 /*
    Points for auto is as follows: 
    Mobile: 3 
    bottom row: 3 
    middle row: 4
    top row: 6
    Docked not engaged: 8 (1 robot max)
    Docked Engaged: 12 (1 robot max)




    */