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
  teleopChargeStation: 0,
  autoGridA1: false,
  autoGridA2: false,
  autoGridA3: false,
  autoGridA4: false,
  autoGridA5: false,
  autoGridA6: false,
  autoGridA7: false,
  autoGridA8: false,
  autoGridA9: false,
  autoGridB1: false,
  autoGridB2: false,
  autoGridB3: false,
  autoGridB4: false,
  autoGridB5: false,
  autoGridB6: false,
  autoGridB7: false,
  autoGridB8: false,
  autoGridB9: false,
  autoGridC1: false,
  autoGridC2: false,
  autoGridC3: false,
  autoGridC4: false,
  autoGridC5: false,
  autoGridC6: false,
  autoGridC7: false,
  autoGridC8: false,
  autoGridC9: false,
  teleopGridA1: false,
  teleopGridA2: false,
  teleopGridA3: false,
  teleopGridA4: false,
  teleopGridA5: false,
  teleopGridA6: false,
  teleopGridA7: false,
  teleopGridA8: false,
  teleopGridA9: false,
  teleopGridB1: false,
  teleopGridB2: false,
  teleopGridB3: false,
  teleopGridB4: false,
  teleopGridB5: false,
  teleopGridB6: false,
  teleopGridB7: false,
  teleopGridB8: false,
  teleopGridB9: false,
  teleopGridC1: false,
  teleopGridC2: false,
  teleopGridC3: false,
  teleopGridC4: false,
  teleopGridC5: false,
  teleopGridC6: false,
  teleopGridC7: false,
  teleopGridC8: false,
  teleopGridC9: false,
  nullifyData: false
}

class DataCollectionPage extends React.Component {
  constructor(props) {
		super(props);
		this.state = INITIAL_STATE;
	}

	gridA1Auto = event => {
		this.setState(prevstate => ({
			autoGridA1: !prevstate.autoGridA1
		}))
	}

	gridA2Auto = event => {
		this.setState(prevstate => ({
			autoGridA2: !prevstate.autoGridA2
		}))
	}

	gridA3Auto = event => {
		this.setState(prevstate => ({
			autoGridA3: !prevstate.autoGridA3
		}))
	}

	gridA4Auto = event => {
		this.setState(prevstate => ({
			autoGridA4: !prevstate.autoGridA4
		}))
	}

	gridA5Auto = event => {
		this.setState(prevstate => ({
			autoGridA5: !prevstate.autoGridA5
		}))
	}

	gridA6Auto = event => {
		this.setState(prevstate => ({
			autoGridA6: !prevstate.autoGridA6
		}))
	}

	gridA7Auto = event => {
		this.setState(prevstate => ({
			autoGridA7: !prevstate.autoGridA7
		}))
	}

	gridA8Auto = event => {
		this.setState(prevstate => ({
			autoGridA8: !prevstate.autoGridA8
		}))
	}

	gridA9Auto = event => {
		this.setState(prevstate => ({
			autoGridA9: !prevstate.autoGridA9
		}))
	}

	gridB1Auto = event => {
		this.setState(prevstate => ({
			autoGridB1: !prevstate.autoGridB1
		}))
	}

	gridB2Auto = event => {
		this.setState(prevstate => ({
			autoGridB2: !prevstate.autoGridB2
		}))
	}

	gridB3Auto = event => {
		this.setState(prevstate => ({
			autoGridB3: !prevstate.autoGridB3
		}))
	}

	gridB4Auto = event => {
		this.setState(prevstate => ({
			autoGridB4: !prevstate.autoGridB4
		}))
	}

	gridB5Auto = event => {
		this.setState(prevstate => ({
			autoGridB5: !prevstate.autoGridB5
		}))
	}

	gridB6Auto = event => {
		this.setState(prevstate => ({
			autoGridB6: !prevstate.autoGridB6
		}))
	}

	gridB7Auto = event => {
		this.setState(prevstate => ({
			autoGridB7: !prevstate.autoGridB7
		}))
	}

	gridB8Auto = event => {
		this.setState(prevstate => ({
			autoGridB8: !prevstate.autoGridB8
		}))
	}

	gridB9Auto = event => {
		this.setState(prevstate => ({
			autoGridB9: !prevstate.autoGridB9
		}))
	}

	gridC1Auto = event => {
		this.setState(prevstate => ({
			autoGridC1: !prevstate.autoGridC1
		}))
	}

	gridC2Auto = event => {
		this.setState(prevstate => ({
			autoGridC2: !prevstate.autoGridC2
		}))
	}

	gridC3Auto = event => {
		this.setState(prevstate => ({
			autoGridC3: !prevstate.autoGridC3
		}))
	}

	gridC4Auto = event => {
		this.setState(prevstate => ({
			autoGridC4: !prevstate.autoGridC4
		}))
	}

	gridC5Auto = event => {
		this.setState(prevstate => ({
			autoGridC5: !prevstate.autoGridC5
		}))
	}

	gridC6Auto = event => {
		this.setState(prevstate => ({
			autoGridC6: !prevstate.autoGridC6
		}))
	}

	gridC7Auto = event => {
		this.setState(prevstate => ({
			autoGridC7: !prevstate.autoGridC7
		}))
	}

	gridC8Auto = event => {
		this.setState(prevstate => ({
			autoGridC8: !prevstate.autoGridC8
		}))
	}

	gridC9Auto = event => {
		this.setState(prevstate => ({
			autoGridC9: !prevstate.autoGridC9
		}))
	}

  addPieceTopAuto = (event) => {
    this.setState(prevstate => ({ 
        autoGrid: prevstate.autoGrid + 6
    }));
	};

	removePieceTopAuto = (event) => {
		this.setState(prevstate => ({ 
			autoGrid: prevstate.autoGrid - 6
		}));
		}

  addPieceMiddleAuto = (event) => { 
		this.setState(prevstate => ({ 
      autoGrid: prevstate.autoGrid + 4
  }));
	};

	removePieceMiddleAuto = (event) => { 
		this.setState(prevstate => ({ 
      autoGrid: prevstate.autoGrid - 4
  }));
	};

  addPieceBottomAuto = (event) => {
		this.setState(prevstate => ({ 
      autoGrid: prevstate.autoGrid + 3
  }));
	};

	removePieceBottomAuto = (event) => { 
		this.setState(prevstate => ({ 
      autoGrid: prevstate.autoGrid - 3
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

	gridA1Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA1: !prevstate.teleopGridA1
		}))
	}

	gridA2Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA2: !prevstate.teleopGridA2
		}))
	}

	gridA3Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA3: !prevstate.teleopGridA3
		}))
	}

	gridA4Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA4: !prevstate.teleopGridA4
		}))
	}

	gridA5Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA5: !prevstate.teleopGridA5
		}))
	}

	gridA6Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA6: !prevstate.teleopGridA6
		}))
	}

	gridA7Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA7: !prevstate.teleopGridA7
		}))
	}

	gridA8Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA8: !prevstate.teleopGridA8
		}))
	}

	gridA9Teleop = event => {
		this.setState(prevstate => ({
			teleopGridA9: !prevstate.teleopGridA9
		}))
	}

	gridB1Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB1: !prevstate.teleopGridB1
		}))
	}

	gridB2Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB2: !prevstate.teleopGridB2
		}))
	}

	gridB3Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB3: !prevstate.teleopGridB3
		}))
	}

	gridB4Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB4: !prevstate.teleopGridB4
		}))
	}

	gridB5Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB5: !prevstate.teleopGridB5
		}))
	}

	gridB6Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB6: !prevstate.teleopGridB6
		}))
	}

	gridB7Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB7: !prevstate.teleopGridB7
		}))
	}

	gridB8Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB8: !prevstate.teleopGridB8
		}))
	}

	gridB9Teleop = event => {
		this.setState(prevstate => ({
			teleopGridB9: !prevstate.teleopGridB9
		}))
	}

	gridC1Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC1: !prevstate.teleopGridC1
		}))
	}

	gridC2Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC2: !prevstate.teleopGridC2
		}))
	}

	gridC3Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC3: !prevstate.teleopGridC3
		}))
	}

	gridC4Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC4: !prevstate.teleopGridC4
		}))
	}

	gridC5Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC5: !prevstate.teleopGridC5
		}))
	}

	gridC6Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC6: !prevstate.teleopGridC6
		}))
	}

	gridC7Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC7: !prevstate.teleopGridC7
		}))
	}

	gridC8Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC8: !prevstate.teleopGridC8
		}))
	}

	gridC9Teleop = event => {
		this.setState(prevstate => ({
			teleopGridC9: !prevstate.teleopGridC9
		}))
	}

  addPieceTopTeleop = (event) => {
	this.setState(prevstate => ({ 
      teleopGrid: prevstate.teleopGrid + 5
  	}));
  };

  removePieceTopTeleop = (event) => {
	this.setState(prevstate => ({ 
		teleopGrid: prevstate.teleopGrid - 5
	}));
	}

  addPieceMiddleTeleop = (event) => {
		this.setState(prevstate => ({ 
      teleopGrid: prevstate.teleopGrid + 3
  }));
	};

	removePieceMiddleTeleop = (event) => {
		this.setState(prevstate => ({ 
			teleopGrid: prevstate.teleopGrid - 3
		}));
		}

  addPieceBottomTeleop = (event) => {
		this.setState(prevstate => ({ 
      teleopGrid: prevstate.teleopGrid + 2
  }));
	};

	removePieceBottomTeleop = (event) => {
		this.setState(prevstate => ({ 
			teleopGrid: prevstate.teleopGrid - 2
		}));
		}

  addLink = (event) => {
		this.setState({
			[event.target.name]: this.state[event.target.name] + 5
		});
	};


	noDockTeleop = (event) => {
		this.setState({
			teleopChargeStation: 0
		});
	};

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

	nullify = event => {
		this.setState(prevstate => ({
			nullifyData: !prevstate.nullifyData	
		}))
	}

    render(props) {
        return (
          <div className='background'>
			<div>
				<div>{console.log("Nullify Data:\t\t", this.state.nullifyData)}</div>
				<div>{console.log("A1 Auto:\t\t", this.state.autoGridA1)}</div>
				<div>{console.log("A2 Auto:\t\t", this.state.autoGridA2)}</div>
				<div>{console.log("A3 Auto:\t\t", this.state.autoGridA3)}</div>
				<div>{console.log("A4 Auto:\t\t", this.state.autoGridA4)}</div>
				<div>{console.log("A5 Auto:\t\t", this.state.autoGridA5)}</div>
				<div>{console.log("A6 Auto:\t\t", this.state.autoGridA6)}</div>
				<div>{console.log("A7 Auto:\t\t", this.state.autoGridA7)}</div>
				<div>{console.log("A8 Auto:\t\t", this.state.autoGridA8)}</div>
				<div>{console.log("A9 Auto:\t\t", this.state.autoGridA9)}</div>
				<div>{console.log("B1 Auto:\t\t", this.state.autoGridB1)}</div>
				<div>{console.log("B2 Auto:\t\t", this.state.autoGridB2)}</div>
				<div>{console.log("B3 Auto:\t\t", this.state.autoGridB3)}</div>
				<div>{console.log("B4 Auto:\t\t", this.state.autoGridB4)}</div>
				<div>{console.log("B5 Auto:\t\t", this.state.autoGridB5)}</div>
				<div>{console.log("B6 Auto:\t\t", this.state.autoGridB6)}</div>
				<div>{console.log("B7 Auto:\t\t", this.state.autoGridB7)}</div>
				<div>{console.log("B8 Auto:\t\t", this.state.autoGridB8)}</div>
				<div>{console.log("B9 Auto:\t\t", this.state.autoGridB9)}</div>
				<div>{console.log("C1 Auto:\t\t", this.state.autoGridC1)}</div>
				<div>{console.log("C2 Auto:\t\t", this.state.autoGridC2)}</div>
				<div>{console.log("C3 Auto:\t\t", this.state.autoGridC3)}</div>
				<div>{console.log("C4 Auto:\t\t", this.state.autoGridC4)}</div>
				<div>{console.log("C5 Auto:\t\t", this.state.autoGridC5)}</div>
				<div>{console.log("C6 Auto:\t\t", this.state.autoGridC6)}</div>
				<div>{console.log("C7 Auto:\t\t", this.state.autoGridC7)}</div>
				<div>{console.log("C8 Auto:\t\t", this.state.autoGridC8)}</div>
				<div>{console.log("C9 Auto:\t\t", this.state.autoGridC9)}</div>
			</div>
  			 <div>{console.log("Auto Griddy:\t\t", this.state.autoGrid)} </div>
			 <div>{console.log("Auto Mobility:\t\t", this.state.autoMobility)} </div>
			 <div>{console.log("Auto Charge Station:\t", this.state.autoChargeStation)} </div>
			 <div>
				<div>{console.log("A1 Teleop:\t\t", this.state.teleopGridA1)}</div>
				<div>{console.log("A2 Teleop:\t\t", this.state.teleopGridA2)}</div>
				<div>{console.log("A3 Teleop:\t\t", this.state.teleopGridA3)}</div>
				<div>{console.log("A4 Teleop:\t\t", this.state.teleopGridA4)}</div>
				<div>{console.log("A5 Teleop:\t\t", this.state.teleopGridA5)}</div>
				<div>{console.log("A6 Teleop:\t\t", this.state.teleopGridA6)}</div>
				<div>{console.log("A7 Teleop:\t\t", this.state.teleopGridA7)}</div>
				<div>{console.log("A8 Teleop:\t\t", this.state.teleopGridA8)}</div>
				<div>{console.log("A9 Teleop:\t\t", this.state.teleopGridA9)}</div>
				<div>{console.log("B1 Teleop:\t\t", this.state.teleopGridB1)}</div>
				<div>{console.log("B2 Teleop:\t\t", this.state.teleopGridB2)}</div>
				<div>{console.log("B3 Teleop:\t\t", this.state.teleopGridB3)}</div>
				<div>{console.log("B4 Teleop:\t\t", this.state.teleopGridB4)}</div>
				<div>{console.log("B5 Teleop:\t\t", this.state.teleopGridB5)}</div>
				<div>{console.log("B6 Teleop:\t\t", this.state.teleopGridB6)}</div>
				<div>{console.log("B7 Teleop:\t\t", this.state.teleopGridB7)}</div>
				<div>{console.log("B8 Teleop:\t\t", this.state.teleopGridB8)}</div>
				<div>{console.log("B9 Teleop:\t\t", this.state.teleopGridB9)}</div>
				<div>{console.log("C1 Teleop:\t\t", this.state.teleopGridC1)}</div>
				<div>{console.log("C2 Teleop:\t\t", this.state.teleopGridC2)}</div>
				<div>{console.log("C3 Teleop:\t\t", this.state.teleopGridC3)}</div>
				<div>{console.log("C4 Teleop:\t\t", this.state.teleopGridC4)}</div>
				<div>{console.log("C5 Teleop:\t\t", this.state.teleopGridC5)}</div>
				<div>{console.log("C6 Teleop:\t\t", this.state.teleopGridC6)}</div>
				<div>{console.log("C7 Teleop:\t\t", this.state.teleopGridC7)}</div>
				<div>{console.log("C8 Teleop:\t\t", this.state.teleopGridC8)}</div>
				<div>{console.log("C9 Teleop:\t\t", this.state.teleopGridC9)}</div>
			 </div>
			 <div>{console.log("Teleop Griddy:\t\t", this.state.teleopGrid)} </div>
			 <div>{console.log("Teleop Charge Station:\t", this.state.teleopChargeStation)} </div>
            <MatchInfo 
			nullify={this.nullify} />
            <Auto
			gridA1Auto={this.gridA1Auto}
			gridA2Auto={this.gridA2Auto}
			gridA3Auto={this.gridA3Auto}
			gridA4Auto={this.gridA4Auto}
			gridA5Auto={this.gridA5Auto}
			gridA6Auto={this.gridA6Auto}
			gridA7Auto={this.gridA7Auto}
			gridA8Auto={this.gridA8Auto}
			gridA9Auto={this.gridA9Auto}
			gridB1Auto={this.gridB1Auto}
			gridB2Auto={this.gridB2Auto}
			gridB3Auto={this.gridB3Auto}
			gridB4Auto={this.gridB4Auto}
			gridB5Auto={this.gridB5Auto}
			gridB6Auto={this.gridB6Auto}
			gridB7Auto={this.gridB7Auto}
			gridB8Auto={this.gridB8Auto}
			gridB9Auto={this.gridB9Auto}
			gridC1Auto={this.gridC1Auto}
			gridC2Auto={this.gridC2Auto}
			gridC3Auto={this.gridC3Auto}
			gridC4Auto={this.gridC4Auto}
			gridC5Auto={this.gridC5Auto}
			gridC6Auto={this.gridC6Auto}
			gridC7Auto={this.gridC7Auto}
			gridC8Auto={this.gridC8Auto}
			gridC9Auto={this.gridC9Auto}
			addPieceTopAuto={this.addPieceTopAuto}
			removePieceTopAuto={this.removePieceTopAuto}
			addPieceMiddleAuto={this.addPieceMiddleAuto}
			removePieceMiddleAuto={this.removePieceMiddleAuto}
			addPieceBottomAuto={this.addPieceBottomAuto}
			removePieceBottomAuto={this.removePieceBottomAuto}
  			addMobilityAuto={this.addMobilityAuto}
 			removeMobilityAuto={this.removeMobilityAuto}
			noDockAuto={this.noDockAuto}
			dockedAuto={this.dockedAuto}
			engagedAuto={this.engagedAuto}/>
            <Teleop
			gridA1Teleop={this.gridA1Teleop}
			gridA2Teleop={this.gridA2Teleop}
			gridA3Teleop={this.gridA3Teleop}
			gridA4Teleop={this.gridA4Teleop}
			gridA5Teleop={this.gridA5Teleop}
			gridA6Teleop={this.gridA6Teleop}
			gridA7Teleop={this.gridA7Teleop}
			gridA8Teleop={this.gridA8Teleop}
			gridA9Teleop={this.gridA9Teleop}
			gridB1Teleop={this.gridB1Teleop}
			gridB2Teleop={this.gridB2Teleop}
			gridB3Teleop={this.gridB3Teleop}
			gridB4Teleop={this.gridB4Teleop}
			gridB5Teleop={this.gridB5Teleop}
			gridB6Teleop={this.gridB6Teleop}
			gridB7Teleop={this.gridB7Teleop}
			gridB8Teleop={this.gridB8Teleop}
			gridB9Teleop={this.gridB9Teleop}
			gridC1Teleop={this.gridC1Teleop}
			gridC2Teleop={this.gridC2Teleop}
			gridC3Teleop={this.gridC3Teleop}
			gridC4Teleop={this.gridC4Teleop}
			gridC5Teleop={this.gridC5Teleop}
			gridC6Teleop={this.gridC6Teleop}
			gridC7Teleop={this.gridC7Teleop}
			gridC8Teleop={this.gridC8Teleop}
			gridC9Teleop={this.gridC9Teleop}
			addPieceTopTeleop={this.addPieceTopTeleop}
			removePieceTopTeleop={this.removePieceTopTeleop}
			addPieceMiddleTeleop={this.addPieceMiddleTeleop}
			removePieceMiddleTeleop={this.removePieceMiddleTeleop}
			addPieceBottomTeleop={this.addPieceBottomTeleop}
			removePieceBottomTeleop={this.removePieceBottomTeleop}
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