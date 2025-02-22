import './DataCollectionPage.scss';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import {
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

const MAX_MATCH_NUMBER = 200;

export default function DataCollectionPage() {
	const dispatch = useAppDispatch();
	const user: IUser = useAppSelector(state => state.user);
	const notes: Record<Topic, string> = useAppSelector(state => state.notes);
	const superNotes: Record<Subtopic, string> = useAppSelector(state => state.superNotes);
	const [robotNumber, setRobotNumber] = useState<string>('');
	const [matchNumber, setMatchNumber] = useState<string>('');

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
			gameYear: 2025,
			creator: user.scouterName,
			eventCode: user.eventCode,
			matchNumber: matchNumber,
			robotNumber: robotNumber,
			comments: generateComments()
		};

		const superNotes: ISuperNoteRequest = {
			gameYear: 2025,
			creator: user.scouterName,
			eventCode: user.eventCode,
			matchNumber: matchNumber,
			robotNumber: robotNumber,
			objectives: generateSuperObjectives()
		};

		dispatch(submitMatch(match));
		dispatch(submitSuperNotes(superNotes));
		dispatch(clearNotes());
		setRobotNumber('');
		setMatchNumber('');
	};

	return (
		<div className="data-collection-page">
			<MatchInformation
				robotNumber={ robotNumber }
				matchNumber={ matchNumber }
				setRobotNumber={ setRobotNumber }
				setMatchNumber={ setMatchNumber }
			/>
			<QualitativeSection />
			<div className='action-buttons'>
				<Button sx={{ m: 0.5 }} variant='outlined' href='/'>Back</Button>
				<Button sx={{ m: 0.5 }} variant='contained' onClick={ handleSubmit }>Submit</Button>
			</div>
		</div>
	);
}
