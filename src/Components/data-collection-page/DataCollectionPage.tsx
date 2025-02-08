import './DataCollectionPage.scss';
import Button from '@mui/material/Button';
import React from 'react';
import { connect } from 'react-redux';
import { resetState } from '../../app/Actions';

import { submitMatch } from '../../app/Effects';
import MatchInformation from '../match-information/MatchInformation';
import QualitativePage from '../qual-page/QualitativePage';

import AllianceSelection from './AllianceSelection';

const selector = (state) => ({
	auto: state.notes.auto,
	collection: state.notes.collection,
	shooting: state.notes.shooting,
	amp: state.notes.amp,
	path: state.notes.path,
	defense: state.notes.defense,
	endgame: state.notes.endgame,
	humanPlayer: state.notes.humanPlayer,
	penalties: state.notes.penalties,
	drivers: state.notes.drivers,
	other: state.notes.other

});

const connectDispatch = (dispatch) => ({
	resetState: () => dispatch(resetState()),
	submitMatch: (teamNumber, secretCode, match) => dispatch(submitMatch(teamNumber, secretCode, match)),
});

const INITIAL_STATE = {
	scoutingTeamNumber: '',
	matchNumber: '',
	allianceColor: 'UNKNOWN',
	arrayText: []
}

class ConnectedDataCollectionPage extends React.Component<any, any> {
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


	generateComments = () => {
		const notes = [
			{
				topic: 'Auto',
				content: this.props.auto
			},
			{
				topic: 'Collection',
				content: this.props.collection
			},
			{
				topic: 'Shooting',
				content: this.props.shooting
			},
			{
				topic: 'Amp',
				content: this.props.amp
			},
			{
				topic:'Path',
				content: this.props.path
			},
			{
				topic: 'Defense',
				content: this.props.defense
			},
			{
				topic: 'Endgame',
				content: this.props.endgame
			},
			{
				topic: 'Human Player',
				content: this.props.humanPlayer,
			},
			{
				topic: 'Penalties',
				content: this.props.penalties
			},
			{
				topic: 'Drivers',
				content: this.props.drivers
			},
			{
				topic: 'Other',
				content: this.props.other
			}

		]

		return notes.filter(content => content.content.trim() !== '');
	}
	addToArray = text => {
		this.setState(oldText => ({
			arrayText: [...oldText.arrayText, text]
		}))
	}
	submit = () => {
		const match = {
			eventCode: this.props.eventCode,
			matchNumber: this.state.matchNumber,
			robotNumber: this.state.scoutingTeamNumber,
			creator: this.props.scouterName,
			allianceColor: this.state.allianceColor,
			gameYear: 2024,
			comments: this.generateComments()
		};
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
				
				<QualitativePage addToArray={this.addToArray} />
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
