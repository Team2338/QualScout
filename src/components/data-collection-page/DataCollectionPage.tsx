import './DataCollectionPage.scss';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
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
import Snackbar from '../common/Snackbar';
import { useSnackbar } from '../../hooks/useSnackbar';
import { APP_CONFIG, VALIDATION } from '../../config/app.config';

export default function DataCollectionPage() {
	const dispatch = useAppDispatch();
	const user: IUser | null = useAppSelector(state => state.user);
	const notes: Record<Topic, string> = useAppSelector(state => state.notes);
	const superNotes: Record<Subtopic, string> = useAppSelector(state => state.superNotes);
	const [robotNumber, setRobotNumber] = useState<string>('');
	const [matchNumber, setMatchNumber] = useState<string>('');
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
	const { snackbar, showSuccess, showError, showWarning, hideSnackbar } = useSnackbar();

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
				const option: ISuperMatch | undefined = SubtopicToOptionMap[subtopic].find(opt => opt.key === selectedKey);
				if (!option) {
					throw new Error(`Option not found for subtopic ${subtopic} with key ${selectedKey}`);
				}
				return {
					gamemode: Gamemode.superscout,
					objective: subtopic,
					count: option.score
				};
			});
	};

	const validateRequiredInfo = (): string[] => {
		const problems: string[] = [];
		if (matchNumber.length === 0) {
			problems.push('You must specify a match number');
		}
		if (Number(matchNumber) < VALIDATION.MIN_MATCH_NUMBER) {
			problems.push(`Match # must be at least ${VALIDATION.MIN_MATCH_NUMBER}`);
		}
		if (Number(matchNumber) >= APP_CONFIG.MAX_MATCH_NUMBER) {
			problems.push(`Match # must be below ${APP_CONFIG.MAX_MATCH_NUMBER}`);
		}
		if (robotNumber.length === 0) {
			problems.push('You must specify a robot number');
		}
		return problems;
	};

	const handleSubmit = async (): Promise<void> => {
		const validationErrors = validateRequiredInfo();
		if (validationErrors.length > 0) {
			showWarning(validationErrors.join('. '));
			return;
		}

		if (!user) {
			showError('User not logged in!');
			return;
		}

		setIsSubmitting(true);

		try {
			const match: IMatch = {
				gameYear: APP_CONFIG.CURRENT_YEAR,
				creator: user.scouterName,
				eventCode: user.eventCode,
				matchNumber: matchNumber,
				robotNumber: robotNumber,
				comments: generateComments()
			};

			const superNotesData: ISuperNoteRequest = {
				gameYear: APP_CONFIG.CURRENT_YEAR,
				creator: user.scouterName,
				eventCode: user.eventCode,
				matchNumber: matchNumber,
				robotNumber: robotNumber,
				objectives: generateSuperObjectives()
			};

			const hasQualitativeNotes = match.comments.length > 0;
			const hasSuperNotes = superNotesData.objectives.length > 0;

			if (!hasQualitativeNotes && !hasSuperNotes) {
				showWarning('Please enter at least one note or rating before submitting');
				setIsSubmitting(false);
				return;
			}

			if (hasSuperNotes) {
				await dispatch(submitSuperNotes(superNotesData));
			}

			if (hasQualitativeNotes) {
				await dispatch(submitMatch(match));
			}

			showSuccess('Data submitted successfully!');
			dispatch(clearNotes());
			setRobotNumber('');
			setMatchNumber('');
		} catch (error) {
			showError('Failed to submit data. Please try again.');
			console.error('Submission error:', error);
		} finally {
			setIsSubmitting(false);
		}
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
				<Button sx={{ m: 0.5 }} variant='outlined' href='/' disabled={isSubmitting}>Back</Button>
				<Button 
					sx={{ m: 0.5 }} 
					variant='contained' 
					onClick={ handleSubmit }
					disabled={isSubmitting}
					startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
				>
					{isSubmitting ? 'Submitting...' : 'Submit'}
				</Button>
			</div>
			<Snackbar
				open={snackbar.open}
				message={snackbar.message}
				severity={snackbar.severity}
				onClose={hideSnackbar}
			/>
		</div>
	);
}
