import React from 'react';
import './Teleop.scss';
import CombinedButtons from './CombinedButtons';
import DockedTeleop from './DockedTeleop';


class Teleop extends React.Component {
    render() {
        return ( 
            <div class='background'>
                <h1 class='text'>Teleop</h1>
                <h3 class='placed'>Grid</h3>
                <CombinedButtons />   
                <h3 class='dock'>Charge Station</h3>
                <DockedTeleop
                noDockTeleop={this.props.noDockTeleop}
                parkedTeleop={this.props.parkedTeleop}
                dockedTeleop={this.props.dockedTeleop}
                engagedTeleop={this.props.engagedTeleop}/> 
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