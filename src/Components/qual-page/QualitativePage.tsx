import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { sendNotes } from '../../app/Actions';
import { useAppDispatch, useAppSelector } from '../../app/Hooks';
import './QualitativePage.scss';


export default function QualitativePage({addToArray}) {
	//categories
	const menuItems = [
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
		'Other'];
	//current category selected
	const [buttonText, setButtonText] = useState(menuItems[0]);

	const dispatch = useAppDispatch();

	//text to be in the text box
	const [text, setText] = useState('');


	//handles text changes in the text box
	const handleText = (event) => {
		setText(event.target.value);
	};


	//handles submit note
	const submit = (event) => {
		event.preventDefault();
		if (buttonText.trim() !== menuItems[0]) {

			dispatch(sendNotes(buttonText, text));
			const submittedText = {text, buttonText};
			addToArray(submittedText);
			setText('');
			setButtonText(menuItems[0]);

		} else {
			console.log('please don\'t leave the category empty :(');
		}

	};

	const TextFieldStyle = {
		width: '100%',
		marginBottom: '16px'
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
			setText(auto);
			setButtonText(menuItems[1]);
		};
		const handleCollectionButton = () => {
			setText(collection);
			setButtonText(menuItems[2]);
		};
		const handleShootingButton = () => {
			setText(shooting);
			setButtonText(menuItems[3]);
		};
		const handleAmpButton = () => {
			setText(amp);
			setButtonText(menuItems[4]);
		};
		const handlePathButton = () => {
			setText(path);
			setButtonText(menuItems[5]);
		};
		const handleDefenseButton = () => {
			setText(defense);
			setButtonText(menuItems[6]);
		};
		const handleEndgameButton = () => {
			setText(endgame);
			setButtonText(menuItems[7]);
		};
		const handleHumanPlayerButton = () => {
			setText(humanPlayer);
			setButtonText(menuItems[8]);
		};
		const handlePenaltiesButton = () => {
			setText(penalties);
			setButtonText(menuItems[9]);
		};
		const handleDriversButton = () => {
			setText(drivers);
			setButtonText(menuItems[10]);
		};
		const handleOtherButton = () => {
			setText(other);
			setButtonText(menuItems[11]);
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

			<p><strong>Selected Category:</strong> { buttonText }</p>

			<TextField
				label="Enter your text here..."
				value={ text }
				onChange={ handleText }
				multiline
				rows={ 10 }
				variant="outlined"
				style={ TextFieldStyle }
				InputLabelProps={ {
					style: {
						color: '#ff5000'
					}
				} }
			/>

			<Button type="submit" variant="contained" onClick={ submit }>Submit Note</Button>

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



