import React from 'react';
import Button  from '@mui/material/Button';

import './Auto.scss';


class Auto extends React.Component { 
    render() {
        return(
            <div>
                <h1>Auto</h1>
                <h3>Mobile</h3>
                <Button variant='contained'>Yes</Button>
                <Button variant='outlined'>No</Button>
                <h3>Bottom Row</h3>
                <Button variant='contained'>Add</Button>
                <Button variant='outlined'>Remove</Button>
                <h3>Middle Row</h3>
                <Button variant='contained'>Add</Button>
                <Button variant='outlined'>Remove</Button>
                <h3>Top Row</h3>
                <Button variant='contained'>Add</Button>
                <Button variant='outlined'>Remove</Button>
                <h3>Docked</h3>
                <Button variant='outlined'>None</Button>
                <Button variant='contained'>Docked Unengaged</Button>
                <Button variant='contained'>Docked Engaged</Button>
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