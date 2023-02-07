import React, { useState } from 'react';
import './DataCollectionPage.scss'
import Button from '@mui/material/Button'
import MatchInfo from '../match-information/MatchInformation.jsx'
import Auto from '../auto-page/Auto.jsx';
import Teleop from'../teleop-page/Teleop.jsx';
import Mobility from '../auto-page/Mobility.jsx';

const INITIAL_STATE = {
  autoGrid: 0,
  autoMobility: 0,
  autoChargeStation: 0,
  teleopGrid: 0,
  teleopChargeStation: 0
}

class DataCollectionPage extends React.Component {
  constructor(props) {
		super(props);
		this.state = INITIAL_STATE;
	}

  addPieceTopAuto = (event) => {
    this.setState(prevstate => ({ 
        autoGrid: prevstate.autoGrid + 6
    }));
};

  addPieceMiddleAuto = (event) => { 
		this.setState(prevstate => ({ 
      autoGrid: prevstate.autoGrid + 4
  }));
	};

  addPieceBottomAuto = (event) => {
		this.setState(prevstate => ({ 
      autoGrid: prevstate.autoGrid + 4
  }));
	};

  addMobilityAuto = (event) => {
		this.setState({
			autoMobility: 3
		});
	};

  removeMobilityAuto = (event) => {
		this.setState({
			autoMobility: 0
		});
	};

	noDockAuto = (event) => {
		this.setState({
			autoChargeStation: 0
		})
	}

  dockedAuto = (event) => {
		this.setState({
			autoChargeStation: 8
		});
	};

  engagedAuto = (event) => {
		this.setState({
			autoChargeStation: 12
		});
	};

  addPieceTopTeleop = (event) => {
		this.setState(prevstate => ({ 
      autoGrid: prevstate.autoGrid + 5
  }));
	};

  addPieceMiddleTeleop = (event) => {
		this.setState(prevstate => ({ 
      autoGrid: prevstate.autoGrid + 3
  }));
	};

  addPieceBottomTeleop = (event) => {
		this.setState(prevstate => ({ 
      autoGrid: prevstate.autoGrid + 2
  }));
	};

  addLink = (event) => {
		this.setState({
			[event.target.name]: this.state[event.target.name] + 5
		});
	};


  noDockTeleop = (event) => {
	this.setStete({
		teleopChargeStation: 0
	})
  }
  parkedTeleop = (event) => {
		this.setState({
			teleopChargeStation: 2
		});
	};

  dockedTeleop = (event) => {
		this.setState({
			teleopChargeStation: 6
		});
	};

  engagedTeleop = (event) => {
		this.setState({
			teleopChargeStation: 10
		});
	};

    render() {
        return (
          <div className='background'>
  			 <div>{console.log("Auto Griddy:\t\t", this.state.autoGrid)} </div>
			 <div>{console.log("Auto Mobility:\t\t", this.state.autoMobility)} </div>
			 <div>{console.log("Auto Charge Station:\t", this.state.autoChargeStation)} </div>
			 <div>{console.log("Teleop Griddy:\t\t", this.state.teleopGrid)} </div>
			 <div>{console.log("Teleop Charge Station:\t", this.state.teleopChargeStation)} </div>
            <MatchInfo />            
            <Auto 
  			addMobilityAuto={this.addMobilityAuto}
 			removeMobilityAuto={this.removeMobilityAuto}
			noDockAuto={this.noDockAuto}
			dockedAuto={this.dockedAuto}
			engagedAuto={this.engagedAuto}/>
            <Teleop
			noDockTeleop={this.noDockTeleop}
			parkedTeleop={this.parkedTeleop}
			dockedTeleop={this.dockedTeleop}
			engagedTeleop={this.engagedTeleop}
			/>
            <div className='submit'>
              <Button sx={{ m: 0.5 }} variant='outlined' className='submit' href='/'>Back</Button>
              <Button sx={{ m: 0.5 }} variant='contained' className='submit'>Submit</Button>
            </div>
          </div>
        );
      }
}
export default DataCollectionPage;