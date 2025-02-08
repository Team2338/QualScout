import './DataCollectionPage.scss';
import Button from '@mui/material/Button';
import React from 'react';
import { connect } from 'react-redux';
import { AllianceColor, IMatch, Topic } from '../../models/models';
import { resetState } from '../../state/Actions';
import { submitMatch } from '../../state/Effects';
import AllianceSelector from './alliance-selector/AllianceSelector';
import MatchInformation from './match-information/MatchInformation';
import QualitativePage from './qualitative-section/QualitativePage';

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
	submitMatch: (teamNumber: string, secretCode: string, match: IMatch) => dispatch(submitMatch(teamNumber, secretCode, match)),
});

const INITIAL_STATE = {
	scoutingTeamNumber: '',
	matchNumber: '',
	allianceColor: AllianceColor.unknown,
}

class ConnectedDataCollectionPage extends React.Component<any, any> {
	constructor(props) {
		super(props);
		this.state = INITIAL_STATE;	
	}

	setRobotNumber = (robotNumber: string) => {
		this.setState({
			scoutingTeamNumber: robotNumber
		});
	};

	setMatchNumber = (matchNumber: string) => {
		this.setState({
			matchNumber: matchNumber
		});
	};

	setAllianceColor = (color: AllianceColor) => {
		this.setState({
			allianceColor: color
		});
	};


	generateComments = () => {
		const notes = [
			{
				topic: Topic.auto,
				content: this.props.auto
			},
			{
				topic: Topic.collection,
				content: this.props.collection
			},
			{
				topic: Topic.shooting,
				content: this.props.shooting
			},
			{
				topic: Topic.amp,
				content: this.props.amp
			},
			{
				topic: Topic.path,
				content: this.props.path
			},
			{
				topic: Topic.defense,
				content: this.props.defense
			},
			{
				topic: Topic.endgame,
				content: this.props.endgame
			},
			{
				topic: Topic.humanPlayer,
				content: this.props.humanPlayer,
			},
			{
				topic: Topic.penalties,
				content: this.props.penalties
			},
			{
				topic: Topic.drivers,
				content: this.props.drivers
			},
			{
				topic: Topic.other,
				content: this.props.other
			}
		];

		return notes.filter(content => content.content.trim() !== '');
	};

	submit = () => {
		const match: IMatch = {
			eventCode: this.props.eventCode,
			matchNumber: this.state.matchNumber,
			robotNumber: this.state.scoutingTeamNumber,
			creator: this.props.scouterName,
			allianceColor: this.state.allianceColor,
			gameYear: 2025,
			comments: this.generateComments()
		};
		// Let the user know if they missed an input
		const problems: string[] = [];
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
					scoutingTeamNumber={ this.state.scoutingTeamNumber }
					matchNumber={ this.state.matchNumber }
					setScoutingTeamNumber={ this.setRobotNumber }
					setMatchNumber={ this.setMatchNumber }
				/>
				<div>
					<AllianceSelector selectAlliance={ this.setAllianceColor } selected={ this.state.allianceColor }/>
				</div>
				
				<QualitativePage />
				<div className='submit'>
					<Button sx={{ m: 0.5 }} variant='outlined' className='submit' href='/'>Back</Button>
					<Button sx={{ m: 0.5 }} variant='contained' className='submit' onClick={ this.submit }>Submit</Button>
				</div>
			</div>
		);
	}
}

const DataCollectionPage = connect(selector, connectDispatch)(ConnectedDataCollectionPage);
export default DataCollectionPage;
