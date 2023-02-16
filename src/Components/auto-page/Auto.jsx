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
                <h3>Grid</h3>
                <CombinedButtons
                gridA1Auto={this.props.gridA1Auto}
                gridA2Auto={this.props.gridA2Auto}
                gridA3Auto={this.props.gridA3Auto}
                gridA4Auto={this.props.gridA4Auto}
                gridA5Auto={this.props.gridA5Auto}
                gridA6Auto={this.props.gridA6Auto}
                gridA7Auto={this.props.gridA7Auto}
                gridA8Auto={this.props.gridA8Auto}
                gridA9Auto={this.props.gridA9Auto}
                gridB1Auto={this.props.gridB1Auto}
                gridB2Auto={this.props.gridB2Auto}
                gridB3Auto={this.props.gridB3Auto}
                gridB4Auto={this.props.gridB4Auto}
                gridB5Auto={this.props.gridB5Auto}
                gridB6Auto={this.props.gridB6Auto}
                gridB7Auto={this.props.gridB7Auto}
                gridB8Auto={this.props.gridB8Auto}
                gridB9Auto={this.props.gridB9Auto}
                gridC1Auto={this.props.gridC1Auto}
                gridC2Auto={this.props.gridC2Auto}
                gridC3Auto={this.props.gridC3Auto}
                gridC4Auto={this.props.gridC4Auto}
                gridC5Auto={this.props.gridC5Auto}
                gridC6Auto={this.props.gridC6Auto}
                gridC7Auto={this.props.gridC7Auto}
                gridC8Auto={this.props.gridC8Auto}
                gridC9Auto={this.props.gridC9Auto}
                addPieceTopAuto={this.props.addPieceTopAuto}
                removePieceTopAuto={this.props.removePieceTopAuto}
                addPieceMiddleAuto={this.props.addPieceMiddleAuto}
                removePieceMiddleAuto={this.props.removePieceMiddleAuto}
                addPieceBottomAuto={this.props.addPieceBottomAuto}
                removePieceBottomAuto={this.props.removePieceBottomAuto} />
                <h3>Mobility</h3>
                <Mobility 
                addMobilityAuto={this.props.addMobilityAuto}
                removeMobilityAuto={this.props.removeMobilityAuto}/>
                <h3>Charge Station</h3>
                <Docked
                noDockAuto={this.props.noDockAuto}
                dockedAuto={this.props.dockedAuto}
                engagedAuto={this.props.engagedAuto}/>
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