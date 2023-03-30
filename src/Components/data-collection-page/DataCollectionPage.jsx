import './DataCollectionPage.scss'
import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button'
import { resetState } from '../../app/Actions';
import MatchInformation from '../match-information/MatchInformation'
import Auto from '../auto-page/Auto';
import Teleop from'../teleop-page/Teleop';
import GearscoutService from '../../Services/GearscoutService'
import AllianceSelection from './AllianceSelection';

const selector = (state) => ({
	autoMobility: state.auto.park,
	autoChargeStation: state.auto.chargeStation,
	autoGrid: state.auto.grid.map((node) => node.value),
	teleopGrid: state.teleop.grid.map((node) => node.value),
	teleopChargeStation: state.teleop.chargeStation
});

const connectDispatch = (dispatch) => ({
	resetState: () => dispatch(resetState())
});

const INITIAL_STATE = {
	scoutingTeamNumber: 0,
	matchNumber: 0,
	allianceColor: 'UNKNOWN',
	isAutoNullified: false,
	isTeleopNullified: false
}

class ConnectedDataCollectionPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = INITIAL_STATE;
	}

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

	setAutoNullified = (value) => {
		this.setState({
			isAutoNullified: value
		});
	};

	setTeleopNullified = (value) => {
		this.setState({
			isTeleopNullified: value
		});
	};

	generateObjectives = () => {
		const autoObjectives = [
			{
				gamemode: 'AUTO',
				objective: 'MOBILITY_2023',
				count: this.props.autoMobility
			},
			{
				gamemode: 'AUTO',
				objective: 'CHARGE_STATION_2023',
				count: this.props.autoChargeStation
			},
			{
				gamemode: 'AUTO',
				objective: 'GRID_2023',
				count: this.props.autoGrid.reduce((sum, value) => sum + value),
				list: this.props.autoGrid
			},
		];

		const teleopObjectives = [
			{
				gamemode: 'TELEOP',
				objective: 'CHARGE_STATION_2023',
				count: this.props.teleopChargeStation
			},
			{
				gamemode: 'TELEOP',
				objective: 'GRID_2023',
				count: this.props.teleopGrid.reduce((sum, value) => sum + value),
				list: this.props.teleopGrid
			}
		];

		const objectives = [];
		if (!this.state.isAutoNullified) {
			objectives.push(...autoObjectives);
		}
		if (!this.state.isTeleopNullified) {
			objectives.push(...teleopObjectives);
		}

		return objectives;
	}

	submit = () => {
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
			objectives: this.generateObjectives()
		};

		GearscoutService.post(url, body, config);
		alert('Data Submitted!');

		this.props.resetState();
		this.setState(INITIAL_STATE);
	};
	


	render() {
		return (
			<div className='background'>
				<MatchInformation
					scoutingTeamNumber={this.state.scoutingTeamNumber}
					matchNumber={this.state.matchNumber}
					setScoutingTeamNumber={this.setRobotNumber}
					setMatchNumber={this.setMatchNumber}
				/>
				<div>
					<AllianceSelection selectAlliance={this.setAllianceColor} selected={this.state.allianceColor}/>
				</div>
				<Auto isNullified={this.state.isAutoNullified} setNullified={this.setAutoNullified}/>
				<Teleop isNullified={this.state.isTeleopNullified} setNullified={this.setTeleopNullified}/>
				<div className='submit'>
					<Button sx={{ m: 0.5 }} style={{textTransform: 'capitalize'}} variant='outlined' className='submit' href='/'>Back</Button>
					<Button sx={{ m: 0.5 }} style={{textTransform: 'capitalize'}} variant='contained' className='submit' onClick={this.submit}>Submit</Button>
				</div>
			</div>
		);
	}
}

const DataCollectionPage = connect(selector, connectDispatch)(ConnectedDataCollectionPage);
export default DataCollectionPage;
