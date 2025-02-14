import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Topic, Auto, Pathing, Coral1, Coral2, Coral3, Algae1, Algae2, Algae3, Algae4, Drivers, HumanP, Climb, Defense } from '../../../models/models';
import { saveNote } from '../../../state/Actions';
import { useAppDispatch, useAppSelector } from '../../../state/Hooks';
import './QualitativeSection.scss';


export default function QualitativeSection() {
	const dispatch = useAppDispatch();

	const [selectedCategory, setSelectedCategory] = useState<Topic>(null);
	const [noteContent, setNoteContent] = useState<string>('');
	const savedNotes: Record<Topic, string> = useAppSelector(state => state.notes);

	const [autoDrop, setAutoDrop] = useState<string>(); 
	const [pathingDrop, setPathingDrop] = useState<string>();

	const [autoCoral1, setAutoCoral1] = useState<string>();
	const [autoCoral2, setAutoCoral2] = useState<string>();
	const [autoCoral3, setAutoCoral3] = useState<string>();

	const [autoAlgae1, setAutoAlgae1] = useState<string>();
	const [autoAlgae2, setAutoAlgae2] = useState<string>();
	const [autoAlgae3, setAutoAlgae3] = useState<string>();
	const [autoAlgae4, setAutoAlgae4] = useState<string>();

	const [autoDriver, setAutoDriver] = useState<string>();

	const [autoHuman, setAutoHuman] = useState<string>();

	const [autoClimb, setAutoClimb] = useState<string>();

	const [autoDefense, setAutoDefense] = useState<string>();
	
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
		};

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
		<div className="qualitative-section">
			<h1>Categories</h1>
			<NoteStatus />

			<p><strong>Selected Category:</strong> { selectedCategory ?? 'None' }</p>

			<div className="dropdown-buttons">
				{selectedCategory === Topic.auto && (
					<TextField
						select
						label="Placement Accuracy"
						value={ autoDrop }
						onChange={ (event) => setAutoDrop(event.target.value as Topic) }
						SelectProps={{
							native: true,
						}}
						variant="outlined"
						fullWidth
					>
						<option value="" disabled>Select a category</option>
						{
							Object.values(Auto).map((topic: Auto) => (
								<option key={ topic } value={ topic }>
									{ topic }
								</option>
							))
						}
					</TextField>

				)}

				{selectedCategory === Topic.pathing && (
					<TextField
						select
						label="Driver Pathing"
						value={ pathingDrop }
						onChange={ (event) => setPathingDrop(event.target.value as Topic) }
						SelectProps={{
							native: true,
						}}
						variant="outlined"
						fullWidth
					>
						<option value="" disabled>Select a category</option>
						{
							Object.values(Pathing).map((topic: Pathing) => (
								<option key={ topic } value={ topic }>
									{ topic }
								</option>
							))
						}
					</TextField>

				)}

				{selectedCategory === Topic.coral && (
					<div>
						<TextField
							select
							label="Ground Collection"
							value={ autoCoral1 }
							onChange={ (event) => setAutoCoral1(event.target.value as Topic) }
							SelectProps={{
								native: true,
							}}
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(Coral1).map((topic: Coral1) => (
									<option key={ topic } value={ topic }>
										{ topic }
									</option>
								))
							}
						</TextField>

						<TextField
							select
							label="Station Collection"
							value={ autoCoral2 }
							onChange={ (event) => setAutoCoral2(event.target.value as Topic) }
							SelectProps={{
								native: true,
							}}
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(Coral2).map((topic: Coral2) => (
									<option key={ topic } value={ topic }>
										{ topic }
									</option>
								))
							}
						</TextField>

						<TextField
							select
							label="Scoring"
							value={ autoCoral3 }
							onChange={ (event) => setAutoCoral3(event.target.value as Topic) }
							SelectProps={{
								native: true,
							}}
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(Coral3).map((topic: Coral3) => (
									<option key={ topic } value={ topic }>
										{ topic }
									</option>
								))
							}
						</TextField>
					</div>
				)}

				{selectedCategory === Topic.algae && (
					<div>
						<TextField
							select
							label="Ground Collection"
							value={ autoAlgae1 }
							onChange={ (event) => setAutoAlgae1(event.target.value as Topic) }
							SelectProps={{
								native: true,
							}}
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(Algae1).map((topic: Algae1) => (
									<option key={ topic } value={ topic }>
										{ topic }
									</option>
								))
							}
						</TextField>

						<TextField
							select
							label="Reef Collection"
							value={ autoAlgae2 }
							onChange={ (event) => setAutoAlgae2(event.target.value as Topic) }
							SelectProps={{
								native: true,
							}}
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(Algae2).map((topic: Algae2) => (
									<option key={ topic } value={ topic }>
										{ topic }
									</option>
								))
							}
						</TextField>

						<TextField
							select
							label="Processor"
							value={ autoAlgae3 }
							onChange={ (event) => setAutoAlgae3(event.target.value as Topic) }
							SelectProps={{
								native: true,
							}}
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(Algae3).map((topic: Algae3) => (
									<option key={ topic } value={ topic }>
										{ topic }
									</option>
								))
							}
						</TextField>

						<TextField
							select
							label="Barge"
							value={ autoAlgae4 }
							onChange={ (event) => setAutoAlgae4(event.target.value as Topic) }
							SelectProps={{
								native: true,
							}}
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(Algae4).map((topic: Algae4) => (
									<option key={ topic } value={ topic }>
										{ topic }
									</option>
								))
							}
						</TextField>
					</div>
				)}

				{selectedCategory === Topic.hp && (
					<TextField
						select
						label="HP at Processor"
						value={ autoHuman }
						onChange={ (event) => setAutoHuman(event.target.value as Topic) }
						SelectProps={{
							native: true,
						}}
						variant="outlined"
						fullWidth
					>
						<option value="" disabled>Select a category</option>
						{
							Object.values(HumanP).map((topic: HumanP) => (
								<option key={ topic } value={ topic }>
									{ topic }
								</option>
							))
						}
					</TextField>
				)}

				{selectedCategory === Topic.drivers && (
					<TextField
						select
						label="Driver Ability"
						value={ autoDriver }
						onChange={ (event) => setAutoDriver(event.target.value as Topic) }
						SelectProps={{
							native: true,
						}}
						variant="outlined"
						fullWidth
					>
						<option value="" disabled>Select a category</option>
						{
							Object.values(Drivers).map((topic: Drivers) => (
								<option key={ topic } value={ topic }>
									{ topic }
								</option>
							))
						}
					</TextField>
				)}

				{selectedCategory === Topic.climb && (
					<TextField
						select
						label="Climb Skill"
						value={ autoClimb }
						onChange={ (event) => setAutoClimb(event.target.value as Topic) }
						SelectProps={{
							native: true,
						}}
						variant="outlined"
						fullWidth
					>
						<option value="" disabled>Select a category</option>
						{
							Object.values(Climb).map((topic: Climb) => (
								<option key={ topic } value={ topic }>
									{ topic }
								</option>
							))
						}
					</TextField>
				)}

				{selectedCategory === Topic.defense && (
					<TextField
						select
						label="Defense Skill"
						value={ autoDefense }
						onChange={ (event) => setAutoDefense(event.target.value as Topic) }
						SelectProps={{
							native: true,
						}}
						variant="outlined"
						fullWidth
					>
						<option value="" disabled>Select a category</option>
						{
							Object.values(Defense).map((topic: Defense) => (
								<option key={ topic } value={ topic }>
									{ topic }
								</option>
							))
						}
					</TextField>
				)}
			</div>

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

			<Button variant="contained" onClick={ submit } disabled={ selectedCategory === null }>Save Note</Button>

			<h1>Saved Notes</h1>
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
