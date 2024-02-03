import './DataCollectionPage.scss'
import React from 'react';
import { connect } from 'react-redux';
import Button from '@mui/material/Button'

import { submitMatch } from '../../app/Effects.ts';
import MatchInformation from '../match-information/MatchInformation'

import AllianceSelection from './AllianceSelection';
import QualitativePage from '../qual-page/QualitativePage';
import { resetState } from '../../app/Actions';

const selector = (state) => ({
	'Auto': state.notes['Auto'],
	'Collection': state.notes['Collection'],
	'Shooting Position': state.notes['Shooting Position'],
	'Shooting Consistency': state.notes['Shooting Consistency'],
	'Path': state.notes['Path'],
	'Defense': state.notes['Defense'],
	'Climbing': state.notes['Climbing'],
	'Human Player': state.notes['Human Player'],
	'Penalties': state.notes['Penalties']

});

const connectDispatch = (dispatch) => ({
	resetState: () => dispatch(resetState()),
	submitMatch: (teamNumber, secretCode, match) => dispatch(submitMatch(teamNumber, secretCode, match)),
});

const INITIAL_STATE = {
	scoutingTeamNumber: '',
	matchNumber: '',
	allianceColor: 'UNKNOWN'
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


	generateObjectives = () => {
		const notes = [
			{
				topic: 'Auto',
				content: this.props['Auto']
			},
			{
				topic: 'Collection',
				content: this.props['Collection']
			},
			{

			},
			{
				topic: 'Shooting Position',
				content: this.props["Shooting Position"]
			},
			{
				topic: 'Shooting Consistency',
				content: this.props['Shooting Consistency']
			},
			{
				topic: "Path",
				content: this.props['Path']
			},
			{
				topic: 'Defense',
				content: this.props['Defense']
			},
			{
				topic: 'Climbing',
				content: this.props['Climbing']
			},
			{
				topic: 'Human Player',
				content: this.props['Human Player'],
			},
			{
				topic: "Penalties",
				content: this.props["Penalties"]
			}

		]

		const objectives = [];
		
			objectives.push(...notes);

		return objectives;
	}

	submit = () => {
		// Let the user know if they missed an input
		const problems = [];
		if (this.state.matchNumber.length === 0) {
			problems.push('You must specify a match number');
		}
		if (this.state.scoutingTeamNumber.length === 0) {
			problems.push('You must specify a team number');
		}
		if (this.state.allianceColor === 'UNKNOWN') {
			problems.push('You must specify an alliance color');
		}
		if (problems.length > 0) {
			alert(problems.join('\n'));
			return;
		}

		const match = {
			eventCode: this.props.eventCode,
			matchNumber: this.state.matchNumber,
			robotNumber: this.state.scoutingTeamNumber,
			creator: this.props.scouterName,
			allianceColor: this.state.allianceColor,
			objectives: this.generateObjectives()
		};

		this.props.submitMatch(this.props.teamNumber, this.props.secretCode, match);

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
				
				<QualitativePage />
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
