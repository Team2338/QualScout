import React from 'react';
import './Teleop.scss';
import CombinedButtons from './CombinedButtons';
import DockedTeleop from './DockedTeleop';


class Teleop extends React.Component {
    render() {
        return ( 
            <div class='background'>
         <h1 class='text'>Teleop</h1>

            <h3 class='placed'>Game Piece Placement</h3>
            <CombinedButtons />
            
         <h3 class='dock'>Docked</h3>
         <DockedTeleop /> 
        </div>

        )
    }
}



export default Teleop;
