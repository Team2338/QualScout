import React from 'react';
import './DataCollectionPage.scss'
import Button from '@mui/material/Button'
import MatchInformation from '../match-information/MatchInformation.jsx'
import Auto from '../auto-page/Auto.jsx';
import Grid from '../shared/grid/Grid.jsx';
import Teleop from'../teleop-page/Teleop.jsx';
import GearscoutService from '../../Services/GearscoutService.js'
import AllianceSelection from './AllianceSelection';

const INITIAL_STATE = {
	autoMobility: 0,
	autoChargeStation: 0,
	teleopChargeStation: 0,
	nullifyData: false,
	scoutingTeamNumber: 0,
	matchNumber: 0,
	allianceColor: 'blue'
}

class DataCollectionPage extends React.Component {
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
		window.location.reload();
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
					count: this.state.autoGrid,
					list: [this.state.autoGridA1, this.state.autoGridA2, this.state.autoGridA3, this.state.autoGridA4, this.state.autoGridA5, this.state.autoGridA6, this.state.autoGridA7, this.state.autoGridA8, this.state.autoGridA9, this.state.autoGridB1, this.state.autoGridB2, this.state.autoGridB3, this.state.autoGridB4, this.state.autoGridB5, this.state.autoGridB6, this.state.autoGridB7, this.state.autoGridB8, this.state.autoGridB9, this.state.autoGridC1, this.state.autoGridC2, this.state.autoGridC3, this.state.autoGridC4, this.state.autoGridC5, this.state.autoGridC6, this.state.autoGridC7, this.state.autoGridC8, this.state.autoGridC9]
				},
				{
					gamemode: 'TELEOP',
					objective: 'CHARGE_STATION_2023',
					count: this.state.teleopChargeStation
				},
				{
					gamemode: 'TELEOP',
					objective: 'GRID_2023',
					count: this.state.teleopGrid,
					list: [this.state.teleopGridA1, this.state.teleopGridA2, this.state.teleopGridA3, this.state.teleopGridA4, this.state.teleopGridA5, this.state.teleopGridA6, this.state.teleopGridA7, this.state.teleopGridA8, this.state.teleopGridA9, this.state.teleopGridB1, this.state.teleopGridB2, this.state.teleopGridB3, this.state.teleopGridB4, this.state.teleopGridB5, this.state.teleopGridB6, this.state.teleopGridB7, this.state.teleopGridB8, this.state.teleopGridB9, this.state.teleopGridC1, this.state.teleopGridC2, this.state.teleopGridC3, this.state.teleopGridC4, this.state.teleopGridC5, this.state.teleopGridC6, this.state.teleopGridC7, this.state.teleopGridC8, this.state.teleopGridC9]
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
		// console.log("Auto Grid:\t\t", this.state.autoGrid);
		// console.log("Auto Mobility:\t\t", this.state.autoMobility);
		// console.log("Auto Charge Station:\t", this.state.autoChargeStation);
		// console.log("Teleop Grid:\t\t", this.state.teleopGrid);
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
					<AllianceSelection />
		{/*				<Button
						name="red"
						className="buttons"
						type="button"
						variant="contained"
						size="medium"
						style={{backgroundColor: '#ee4444', margin: 5, textTransform: 'capitalize'}}
						onClick={() => this.setAllianceColor('red')}
					>
						Red Alliance
					</Button>
					<Button
					name="blue"
						className="buttons"
						type="button"
						variant="contained"
						size="medium"
						style={{backgroundColor: '#5577ff', margin: 5, textTransform: 'capitalize'}}
						onClick={() => this.setAllianceColor('blue')}
					>
						Blue Alliance
					</Button>     */}
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

export default DataCollectionPage;
