import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Topic } from '../../../models/models';
import { saveNote } from '../../../state/Actions';
import { useAppDispatch, useAppSelector } from '../../../state/Hooks';
import './QualitativePage.scss';


export default function QualitativePage() {
	const dispatch = useAppDispatch();

	const [selectedCategory, setSelectedCategory] = useState<Topic>(null);
	const [noteContent, setNoteContent] = useState<string>('');
	const savedNotes: Record<Topic, string> = useAppSelector(state => state.notes);

	const submit = (event) => {
		event.preventDefault();
		if (selectedCategory !== null) {
			dispatch(saveNote(selectedCategory, noteContent));
			setNoteContent('');
			setSelectedCategory(null);
		}
	};

	function NoteStatus() {
		const handleButtonClick = (topic: Topic) => {
			setNoteContent(savedNotes[topic]);
			setSelectedCategory(topic);
		}

		return (
			<div className="category-buttons">
				{
					Object.values(Topic).map((topic: Topic) => (
						<Button
							key={ topic }
							variant="contained"
							onClick={ () => handleButtonClick(topic) }
						>
							{ topic }
						</Button>
					))
				}
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
