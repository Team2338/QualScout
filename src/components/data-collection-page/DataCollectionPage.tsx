import './DataCollectionPage.scss';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import {
	CURRENT_YEAR,
	Gamemode,
	IMatch,
	INote,
	IObjective,
	ISuperMatch,
	ISuperNoteRequest,
	IUser,
	Subtopic,
	Topic
} from '../../models/models';
import { clearNotes } from '../../state/Actions';
import { submitMatch, submitSuperNotes } from '../../state/Effects';
import MatchInformation from './match-information/MatchInformation';
import QualitativeSection from './qualitative-section/QualitativeSection';
import { useAppDispatch, useAppSelector } from '../../state/Hooks';
import { SubtopicToOptionMap } from '../../models/superscout-constants';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const MAX_MATCH_NUMBER = 200;
const ACCURACY_OPTIONS: string[] = ['0', '25', '50', '75', '95', '100'];

export default function DataCollectionPage() {
	const dispatch = useAppDispatch();
	const user: IUser = useAppSelector(state => state.user);
	const notes: Record<Topic, string> = useAppSelector(state => state.notes);
	const superNotes: Record<Subtopic, string> = useAppSelector(state => state.superNotes);
	const [robotNumber, setRobotNumber] = useState<string>('');
	const [matchNumber, setMatchNumber] = useState<string>('');
	const [autoAccuracy, setAutoAccuracy] = useState<string>('');
	const [teleopAccuracy, setTeleopAccuracy] = useState<string>('');

	const generateComments = (): INote[] => {
		return Object.values(Topic)
			.filter((topic: Topic) => !!notes[topic].trim()) // Ignore empty notes
			.map((topic: Topic): INote => ({
				topic: topic,
				content: notes[topic]
			}));
	};

	const generateSuperObjectives = (): IObjective[] => {
		return Object.values(Subtopic)
			.filter((subtopic: Subtopic) => !!superNotes[subtopic])
			.map((subtopic: Subtopic): IObjective => {
				const selectedKey: string = superNotes[subtopic];
				const option: ISuperMatch = SubtopicToOptionMap[subtopic].find(opt => opt.key === selectedKey);
				return {
					gamemode: Gamemode.superscout,
					objective: subtopic,
					count: option.score
				};
			});
	};

	const validateRequiredInfo = (): boolean => {
		const problems: string[] = [];
		if (matchNumber.length === 0)
			problems.push('You must specify a match number');
		if (Number(matchNumber) >= MAX_MATCH_NUMBER)
			problems.push(`Match # must be below ${MAX_MATCH_NUMBER}`);
		if (robotNumber.length === 0)
			problems.push('You must specify a robot number');

		if (problems.length > 0) {
			alert(problems.join('\n'));
			return false;
		}

		return true;
	};

	const handleSubmit = (): void => {
		if (!validateRequiredInfo()) {
			return;
		}

		const match: IMatch = {
			gameYear: CURRENT_YEAR,
			creator: user.scouterName,
			eventCode: user.eventCode,
			matchNumber: matchNumber,
			robotNumber: robotNumber,
			comments: generateComments()
		};

		const superNotes: ISuperNoteRequest = {
			gameYear: CURRENT_YEAR,
			creator: user.scouterName,
			eventCode: user.eventCode,
			matchNumber: matchNumber,
			robotNumber: robotNumber,
			objectives: generateSuperObjectives()
		};

		if (autoAccuracy !== '') {
			superNotes.objectives.push({ gamemode: Gamemode.auto, objective: 'ACCURACY', count: Number(autoAccuracy) });
		}

		if (teleopAccuracy !== '') {
			superNotes.objectives.push({ gamemode: Gamemode.teleop, objective: 'ACCURACY', count: Number(teleopAccuracy) });
		}

		if (superNotes.objectives.length > 0) {
			dispatch(submitSuperNotes(superNotes));
		}

		if (match.comments.length > 0) {
			dispatch(submitMatch(match));
		}

		dispatch(clearNotes());
		setRobotNumber('');
		setMatchNumber('');
		setAutoAccuracy('');
		setTeleopAccuracy('');
	};

	return (
		<div className="data-collection-page">
			<MatchInformation
				robotNumber={ robotNumber }
				matchNumber={ matchNumber }
				setRobotNumber={ setRobotNumber }
				setMatchNumber={ setMatchNumber }
			/>

			<FormControl className="accuracy-wrapper" margin="dense">
				<InputLabel id="auto-avg-accuracy-label">Auto Average Accuracy</InputLabel>
				<Select
					id="auto-avg-accuracy-dropdown"
					labelId="auto-avg-accuracy-label"
					label="Auto Average Accuracy"
					value={ autoAccuracy }
					variant="outlined"
					onChange={ event => setAutoAccuracy(event.target.value) }
				>
					<MenuItem value={ '' } style={{ fontStyle: 'italic', color: '#707070' }}>Do not report</MenuItem>
					{
						ACCURACY_OPTIONS.map(option => (
							<MenuItem key={ option } value={ option } style={{ color: '#000' }}>{ option }</MenuItem>
						))
					}
				</Select>
			</FormControl>
			<FormControl className="accuracy-wrapper" margin="dense">
				<InputLabel id="teleop-avg-accuracy-label">Teleop Average Accuracy</InputLabel>
				<Select
					id="teleop-avg-accuracy-dropdown"
					labelId="teleop-avg-accuracy-label"
					label="Teleop Average Accuracy"
					value={ teleopAccuracy }
					variant="outlined"
					onChange={ event => setTeleopAccuracy(event.target.value) }
				>
					<MenuItem value={ '' } style={{ fontStyle: 'italic', color: '#707070' }}>Do not report</MenuItem>
					{
						ACCURACY_OPTIONS.map(option => (
							<MenuItem key={ option } value={ option } style={{ color: '#000' }}>{ option }</MenuItem>
						))
					}
				</Select>
			</FormControl>
			<QualitativeSection />
			<div className='action-buttons'>
				<Button sx={{ m: 0.5 }} variant='outlined' href='/'>Back</Button>
				<Button sx={{ m: 0.5 }} variant='contained' onClick={ handleSubmit }>Submit</Button>
			</div>
		</div>
	);
}
