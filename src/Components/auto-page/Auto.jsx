import React from 'react';
import Mobility from './Mobility';
import './Auto.scss';
import CombinedButtons from './CombinedButtons';
import Docked from './Docked';


class Auto extends React.Component { 
    render() {
        return(
            <div class='background'>
                <h1 class='text'>Auto</h1>
                <h3>Game Piece Placement</h3>
                <CombinedButtons />
                <h3>Mobility</h3>
                <Mobility />
                <h3>Docked</h3>
                <Docked />
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