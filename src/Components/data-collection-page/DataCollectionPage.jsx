import './DataCollectionPage.scss'
import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button'
import MatchInformation from '../match-information/MatchInformation.jsx'
import Auto from '../auto-page/Auto.jsx';
import Teleop from'../teleop-page/Teleop.jsx';
import GearscoutService from '../../Services/GearscoutService.js'
import AllianceSelection from './AllianceSelection';

const selector = (state) => ({
	autoGrid: state.auto.grid.map((node) => node.value),
	teleopGrid: state.teleop.grid.map((node) => node.value),
});

const INITIAL_STATE = {
	autoMobility: 0,
	autoChargeStation: 0,
	teleopChargeStation: 0,
	nullifyData: false,
	scoutingTeamNumber: 0,
	matchNumber: 0,
	allianceColor: 'UNKNOWN'
}

class ConnectedDataCollectionPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = INITIAL_STATE;
	}

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
		});
	};

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

	setRobotNumber = (robotNumber) => {
		this.setState({
			scoutingTeamNumber: robotNumber
		});
	};

	setMatchNumber = (matchNumber) => {
		this.setState({
			matchNumber: matchNumber
		});
	};

	setAllianceColor = (color) => {
		this.setState({
			allianceColor: color
		});
	};

	nullify = event => {
		this.setState(prevstate => ({
			nullifyData: !prevstate.nullifyData	
		}))
	}

	submit = () => {
		alert('Data Submitted!');
		const url = '/team/' + this.props.teamNumber;
		const config = {
			headers: {
				secretCode: this.props.secretCode
			}
		};
		const body = {
			eventCode: this.props.eventCode,
			matchNumber: this.state.matchNumber,
			robotNumber: this.state.scoutingTeamNumber,
			creator: this.props.scouterName,
			allianceColor: this.state.allianceColor,
			objectives: [
				{
					gamemode: 'AUTO',
					objective: 'MOBILITY_2023',
					count: this.state.autoMobility
				},
				{
					gamemode: 'AUTO',
					objective: 'CHARGE_STATION_2023',
					count: this.state.autoChargeStation
				},
				{
					gamemode: 'AUTO',
					objective: 'GRID_2023',
					count: this.props.autoGrid.reduce((sum, value) => sum + value),
					list: this.props.autoGrid
				},
				{
					gamemode: 'TELEOP',
					objective: 'CHARGE_STATION_2023',
					count: this.state.teleopChargeStation
				},
				{
					gamemode: 'TELEOP',
					objective: 'GRID_2023',
					count: this.props.teleopGrid.reduce((sum, value) => sum + value),
					list: this.props.teleopGrid
				}
			]
		};
		GearscoutService.post(url, body, config);

		this.setState(INITIAL_STATE);
	};
	


	render() {
		// console.log("Robot Number:\t\t", this.state.scoutingTeamNumber);
		// console.log("Match Number:\t\t", this.state.matchNumber);
		// console.log("Nullify Data:\t\t", this.state.nullifyData);
		// console.log("Auto Mobility:\t\t", this.state.autoMobility);
		// console.log("Auto Charge Station:\t", this.state.autoChargeStation);
		// console.log("Teleop Charge Station:\t", this.state.teleopChargeStation);
		
		return (
			<div className='background'>
				<MatchInformation
					nullify={this.nullify}
					scoutingTeamNumber={this.state.scoutingTeamNumber}
					matchNumber={this.state.matchNumber}
					setScoutingTeamNumber={this.setRobotNumber}
					setMatchNumber={this.setMatchNumber}
				/>
				<div>
					<AllianceSelection selectAlliance={this.setAllianceColor}/>
				</div>
				<Auto
					addMobilityAuto={this.addMobilityAuto}
					removeMobilityAuto={this.removeMobilityAuto}
					noDockAuto={this.noDockAuto}
					dockedAuto={this.dockedAuto}
					engagedAuto={this.engagedAuto}
				/>
				<Teleop
					noDockTeleop={this.noDockTeleop}
					parkedTeleop={this.parkedTeleop}
					dockedTeleop={this.dockedTeleop}
					engagedTeleop={this.engagedTeleop}
				/>
				<div className='submit'>
					<Button sx={{ m: 0.5 }} style={{textTransform: 'capitalize'}} variant='outlined' className='submit' href='/'>Back</Button>
					<Button sx={{ m: 0.5 }} style={{textTransform: 'capitalize'}} variant='contained' className='submit' onClick={this.submit}>Submit</Button>
				</div>
			</div>
		);
	}
}

const DataCollectionPage = connect(selector, null)(ConnectedDataCollectionPage);
export default DataCollectionPage;
