import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Topic } from '../../../models/models';
import { sendNotes } from '../../../state/Actions';
import { useAppDispatch, useAppSelector } from '../../../state/Hooks';
import './QualitativePage.scss';


export default function QualitativePage({addToArray}) {
	const dispatch = useAppDispatch();

	const [selectedCategory, setSelectedCategory] = useState<Topic>(null);
	const [noteContent, setNoteContent] = useState('');

	const submit = (event) => {
		event.preventDefault();
		if (selectedCategory !== null) {
			dispatch(sendNotes(selectedCategory, noteContent));
			const submittedText = {noteContent, selectedCategory};
			addToArray(submittedText);
			setNoteContent('');
			setSelectedCategory(null);
		}
	};

	//declarations to import app state
	const auto = useAppSelector(state => state.notes[Topic.auto]);
	const collection = useAppSelector(state => state.notes[Topic.collection]);
	const shooting = useAppSelector(state => state.notes[Topic.shooting]);
	const amp = useAppSelector(state => state.notes[Topic.amp]);
	const path = useAppSelector(state => state.notes[Topic.path]);
	const defense = useAppSelector(state => state.notes[Topic.defense]);
	const endgame = useAppSelector(state => state.notes[Topic.endgame]);
	const humanPlayer = useAppSelector(state => state.notes[Topic.humanPlayer]);
	const penalties = useAppSelector(state => state.notes[Topic.penalties]);
	const drivers = useAppSelector(state => state.notes[Topic.drivers]);
	const other = useAppSelector(state => state.notes[Topic.other]);

	const savedNotes: Record<Topic, string> = useAppSelector(state => state.notes);

	function NoteStatus() {
		const handleAutoButton = () => {
			setNoteContent(auto);
			setSelectedCategory(Topic.auto);
		};
		const handleCollectionButton = () => {
			setNoteContent(collection);
			setSelectedCategory(Topic.collection);
		};
		const handleShootingButton = () => {
			setNoteContent(shooting);
			setSelectedCategory(Topic.shooting);
		};
		const handleAmpButton = () => {
			setNoteContent(amp);
			setSelectedCategory(Topic.amp);
		};
		const handlePathButton = () => {
			setNoteContent(path);
			setSelectedCategory(Topic.path);
		};
		const handleDefenseButton = () => {
			setNoteContent(defense);
			setSelectedCategory(Topic.defense);
		};
		const handleEndgameButton = () => {
			setNoteContent(endgame);
			setSelectedCategory(Topic.endgame);
		};
		const handleHumanPlayerButton = () => {
			setNoteContent(humanPlayer);
			setSelectedCategory(Topic.humanPlayer);
		};
		const handlePenaltiesButton = () => {
			setNoteContent(penalties);
			setSelectedCategory(Topic.penalties);
		};
		const handleDriversButton = () => {
			setNoteContent(drivers);
			setSelectedCategory(Topic.drivers);
		};
		const handleOtherButton = () => {
			setNoteContent(other);
			setSelectedCategory(Topic.other);
		};

		return (
			<div className="category-buttons">
				<Button variant="contained" onClick={ handleAutoButton }> Auto </Button>
				<Button variant="contained" onClick={ handleCollectionButton }> Collection </Button>
				<Button variant="contained" onClick={ handleShootingButton }> Shooting </Button>
				<Button variant="contained" onClick={ handleAmpButton }> Amp </Button>
				<Button variant="contained" onClick={ handlePathButton }> Path </Button>
				<Button variant="contained" onClick={ handleDefenseButton }> Defense </Button>
				<Button variant="contained" onClick={ handleEndgameButton }> Endgame </Button>
				<Button variant="contained" onClick={ handleHumanPlayerButton }> Human Player </Button>
				<Button variant="contained" onClick={ handlePenaltiesButton }> Penalties </Button>
				<Button variant="contained" onClick={ handleDriversButton }> Drivers </Button>
				<Button variant="contained" onClick={ handleOtherButton }> Other </Button>
			</div>
		);
	}

	return (
		<div className="qualitative-page">
			<h1>Categories</h1>
			<NoteStatus />

			<p><strong>Selected Category:</strong> { selectedCategory ?? 'None' }</p>

			<TextField
				label="Enter your text here..."
				value={ noteContent }
				onChange={ (event) => setNoteContent(event.target.value) }
				multiline
				rows={ 10 }
				variant="outlined"
				fullWidth={ true }
				sx={{
					marginBottom: '16px',
				}}
				disabled={ selectedCategory === null }
			/>

			<Button variant="contained" onClick={ submit } disabled={ selectedCategory === null }>Submit Note</Button>

			<h1>Submitted Notes</h1>
			<ul className="submitted-notes">
				{
					Object.values(Topic).map((topic: Topic) => (
						<li key={ topic }>
							<strong>{ topic }:</strong>
							<p>{ savedNotes[topic] }</p>
						</li>
					))
				}
			</ul>
		</div>
	);
}



