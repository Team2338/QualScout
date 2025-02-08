import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { sendNotes } from '../../../state/Actions';
import { useAppDispatch, useAppSelector } from '../../../state/Hooks';
import './QualitativePage.scss';

const categories: string[] = [
	'None Selected',
	'Auto',
	'Collection',
	'Shooting',
	'Amp',
	'Path',
	'Defense',
	'Endgame',
	'Human Player',
	'Penalties',
	'Drivers',
	'Other'
];

export default function QualitativePage({addToArray}) {
	const dispatch = useAppDispatch();

	const [selectedCategory, setSelectedCategory] = useState(categories[0]);
	const [noteContent, setNoteContent] = useState('');

	const submit = (event) => {
		event.preventDefault();
		if (selectedCategory.trim() !== categories[0]) {

			dispatch(sendNotes(selectedCategory, noteContent));
			const submittedText = {noteContent, selectedCategory};
			addToArray(submittedText);
			setNoteContent('');
			setSelectedCategory(categories[0]);

		} else {
			console.log('please don\'t leave the category empty :(');
		}
	};

	//declarations to import app state
	const auto = useAppSelector(state => state.notes.auto);
	const collection = useAppSelector(state => state.notes.collection);
	const shooting = useAppSelector(state => state.notes.shooting);
	const amp = useAppSelector(state => state.notes.amp);
	const path = useAppSelector(state => state.notes.path);
	const defense = useAppSelector(state => state.notes.defense);
	const endgame = useAppSelector(state => state.notes.endgame);
	const humanPlayer = useAppSelector(state => state.notes.humanPlayer);
	const penalties = useAppSelector(state => state.notes.penalties);
	const drivers = useAppSelector(state => state.notes.drivers);
	const other = useAppSelector(state => state.notes.other);

	function NoteStatus() {
		//function chains to handle pulling data from categories when clicked
		const handleAutoButton = () => {
			setNoteContent(auto);
			setSelectedCategory(categories[1]);
		};
		const handleCollectionButton = () => {
			setNoteContent(collection);
			setSelectedCategory(categories[2]);
		};
		const handleShootingButton = () => {
			setNoteContent(shooting);
			setSelectedCategory(categories[3]);
		};
		const handleAmpButton = () => {
			setNoteContent(amp);
			setSelectedCategory(categories[4]);
		};
		const handlePathButton = () => {
			setNoteContent(path);
			setSelectedCategory(categories[5]);
		};
		const handleDefenseButton = () => {
			setNoteContent(defense);
			setSelectedCategory(categories[6]);
		};
		const handleEndgameButton = () => {
			setNoteContent(endgame);
			setSelectedCategory(categories[7]);
		};
		const handleHumanPlayerButton = () => {
			setNoteContent(humanPlayer);
			setSelectedCategory(categories[8]);
		};
		const handlePenaltiesButton = () => {
			setNoteContent(penalties);
			setSelectedCategory(categories[9]);
		};
		const handleDriversButton = () => {
			setNoteContent(drivers);
			setSelectedCategory(categories[10]);
		};
		const handleOtherButton = () => {
			setNoteContent(other);
			setSelectedCategory(categories[11]);
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

			<p><strong>Selected Category:</strong> { selectedCategory }</p>

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
			/>

			<Button variant="contained" onClick={ submit }>Submit Note</Button>

			<h1>Submitted Notes</h1>
			<ul className="submitted-notes">
				<li>
					<strong>Auto:</strong>
					<p>{ auto }</p>
				</li>
				<li>
					<strong>Collection:</strong>
					<p>{ collection }</p>
				</li>
				<li>
					<strong>Shooting:</strong>
					<p>{ shooting }</p>
				</li>
				<li>
					<strong>Amp:</strong>
					<p>{ amp }</p>
				</li>
				<li>
					<strong>Path:</strong>
					<p>{ path }</p>
				</li>
				<li>
					<strong>Defense:</strong>
					<p>{ defense }</p>
				</li>
				<li>
					<strong>Endgame:</strong>
					<p>{ endgame }</p>
				</li>
				<li>
					<strong>Human Player:</strong>
					<p>{ humanPlayer }</p>
				</li>
				<li>
					<strong>Penalties:</strong>
					<p>{ penalties }</p>
				</li>
				<li>
					<strong>Drivers:</strong>
					<p>{ drivers }</p>
				</li>
				<li>
					<strong>Other:</strong>
					<p>{ other }</p>
				</li>
			</ul>
		</div>
	);
}



