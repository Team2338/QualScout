import './DataCollectionPage.scss';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { IMatch, INote, IUser, Topic, Drop, AutoPlacementAccuracy, PathingDrivers, CoralGroundCollection, CoralStationCollection, CoralScoring, AlgaeGroundCollection, AlgaeReefCollection, AlgaeProcessor, AlgaeBarge, DriverAbility, HPAtProcessor, ClimbSkill, DefenseDriverSkill, DefenseType } from '../../models/models';  
import { clearNotes } from '../../state/Actions';
import { submitMatch } from '../../state/Effects';
import MatchInformation from './match-information/MatchInformation';
import QualitativeSection from './qualitative-section/QualitativeSection';
import { useAppDispatch, useAppSelector } from '../../state/Hooks';

const MAX_MATCH_NUMBER = 200;

function initializeDropEnums() {
	return {
	  [Drop.AutoPlacementAccuracy]: AutoPlacementAccuracy,
	  [Drop.PathingDrivers]: PathingDrivers,
	  [Drop.CoralGroundCollection]: CoralGroundCollection,
	  [Drop.CoralStationCollection]: CoralStationCollection,
	  [Drop.CoralScoring]: CoralScoring,
	  [Drop.AlgaeGroundCollection]: AlgaeGroundCollection,
	  [Drop.AlgaeReefCollection]: AlgaeReefCollection,
	  [Drop.AlgaeProcessor]: AlgaeProcessor,
	  [Drop.AlgaeBarge]: AlgaeBarge,
	  [Drop.DriverAbility]: DriverAbility,
	  [Drop.HPAtProcessor]: HPAtProcessor,
	  [Drop.ClimbSkill]: ClimbSkill,
	  [Drop.DefenseDriverSkill]: DefenseDriverSkill,
	  [Drop.DefenseType]: DefenseType,
	};
}

export default function DataCollectionPage() {
	const dispatch = useAppDispatch();
	const user: IUser = useAppSelector(state => state.user);
	const notes: Record<Topic, string> = useAppSelector(state => state.notes);
	const [robotNumber, setRobotNumber] = useState<string>('');
	const [matchNumber, setMatchNumber] = useState<string>('');

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const Drop = initializeDropEnums();

	const generateComments = (): INote[] => {
		return Object.values(Topic)
			.filter((topic: Topic) => !!notes[topic].trim()) // Ignore empty notes
			.map((topic: Topic): INote => ({
				topic: topic,
				content: notes[topic]
			}));
	};

	const validateRequiredInfo = (): void => {
		const problems: string[] = [];
		if (matchNumber.length === 0)
			problems.push('You must specify a match number');
		if (Number(matchNumber) >= MAX_MATCH_NUMBER)
			problems.push(`Match # must be below ${MAX_MATCH_NUMBER}`);
		if (robotNumber.length === 0)
			problems.push('You must specify a robot number');

		if (problems.length > 0)
			alert(problems.join('- \n'));
	};

	const handleSubmit = (): void => {
		validateRequiredInfo();

		const match: IMatch = {
			gameYear: 2025,
			creator: user.scouterName,
			eventCode: user.eventCode,
			matchNumber: matchNumber,
			robotNumber: robotNumber,
			comments: generateComments(),
			dropdowns: Object.values(initializeDropEnums)
		};

		dispatch(submitMatch(match));
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
