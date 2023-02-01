import React from 'react';
import './DataCollectionPage.scss'
import Button from '@mui/material/Button'
import MatchInfo from '../match-information/MatchInformation.jsx'
import Auto from '../auto-page/Auto.jsx';
import Teleop from'../teleop-page/Teleop.jsx'

const INITIAL_STATE = {
  autoGrid: 0,
  autoMobility: 0,
  autoChargeStation: 0,
  teleopGrid: 0,
  teleopLink: 0,
  teleopChargeStation: 0
}

class DataCollectionPage extends React.Component {
  constructor(props) {
		super(props);
		this.state = INITIAL_STATE;
	}

  addPieceTopAuto = (event) => {
		console.log(event);
		this.setState({
			[event.target.name]: this.state[event.target.name] + 6
		});
	};

  addPieceMiddleAuto = (event) => {
		console.log(event);
		this.setState({
			[event.target.name]: this.state[event.target.name] + 4
		});
	};

  addPieceBottomAuto = (event) => {
		console.log(event);
		this.setState({
			[event.target.name]: this.state[event.target.name] + 3
		});
	};

  mobilityAuto = (event) => {
		console.log(event);
		this.setState({
			[event.target.name]: this.state[event.target.name] + 3
		});
	};

  dockedAuto = (event) => {
		console.log(event);
		this.setState({
			[event.target.name]: this.state[event.target.name] + 8
		});
	};

  engagedAuto = (event) => {
		console.log(event);
		this.setState({
			[event.target.name]: this.state[event.target.name] + 12
		});
	};

  addPieceTopTeleop = (event) => {
		console.log(event);
		this.setState({
			[event.target.name]: this.state[event.target.name] + 5
		});
	};

  addPieceMiddleTeleop = (event) => {
		console.log(event);
		this.setState({
			[event.target.name]: this.state[event.target.name] + 3
		});
	};

  addPieceBottomTeleop = (event) => {
		console.log(event);
		this.setState({
			[event.target.name]: this.state[event.target.name] + 2
		});
	};

  addLink = (event) => {
		console.log(event);
		this.setState({
			[event.target.name]: this.state[event.target.name] + 5
		});
	};

  parkedTeleop = (event) => {
		console.log(event);
		this.setState({
			[event.target.name]: this.state[event.target.name] + 2
		});
	};

  dockedTeleop = (event) => {
		console.log(event);
		this.setState({
			[event.target.name]: this.state[event.target.name] + 6
		});
	};

  engagedTeleop = (event) => {
		console.log(event);
		this.setState({
			[event.target.name]: this.state[event.target.name] + 10
		});
	};

    render() {
        return (
          <div className='background'>
            <MatchInfo />
            <Auto />
            <Teleop />
            <div className='submit'>
              <Button sx={{ m: 0.5 }} variant='outlined' className='submit' href='/'>Back</Button>
              <Button sx={{ m: 0.5 }} variant='contained' className='submit'>Submit</Button>
            </div>
          </div>
        );
      }
}
export default DataCollectionPage;