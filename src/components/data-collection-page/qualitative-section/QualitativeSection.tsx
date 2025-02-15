import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Topic, Auto, Pathing, CoralGroundCollection, CoralStationCollection, CoralScoring, AlgaeGroundCollection, AlgaeReefCollection, AlgaeProcessor, AlgaeBarge, Drivers, HumanP, Climb, DefenseSkill, DefenseType } from '../../../models/models';
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

	const [coralGroundCollection, setCoralGroundCollection] = useState<string>();
	const [coralStationCollection, setCoralStationCollection] = useState<string>();
	const [coralScoring, setCoralScoring] = useState<string>();

	const [algaeGroundCollection, setAlgaeGroundCollection] = useState<string>();
	const [algaeReefCollection, setAlgaeReefCollection] = useState<string>();
	const [algaeProcessor, setAlgaeProcessor] = useState<string>();
	const [algaeBarge, setAlgaeBarge] = useState<string>();

	const [driver, setDriver] = useState<string>();

	const [human, setHuman] = useState<string>();

	const [climb, setClimb] = useState<string>();

	const [defenseSkill, setDefenseSkill] = useState<string>();
	const [defenseType, setDefenseType] = useState<string>();

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
					<div className="dropdown-buttons">
						<TextField
							select
							label="Ground Collection"
							value={ coralGroundCollection }
							onChange={ (event) => setCoralGroundCollection(event.target.value as Topic) }
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(CoralGroundCollection).map((topic: CoralGroundCollection) => (
									<option key={ topic } value={ topic }>
										{ topic }
									</option>
								))
							}
						</TextField>

						<TextField
							select
							label="Station Collection"
							value={ coralStationCollection }
							onChange={ (event) => setCoralStationCollection(event.target.value as Topic) }
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(CoralStationCollection).map((topic: CoralStationCollection) => (
									<option key={ topic } value={ topic }>
										{ topic }
									</option>
								))
							}
						</TextField>

						<TextField
							select
							label="Scoring"
							value={ coralScoring }
							onChange={ (event) => setCoralScoring(event.target.value as Topic) }
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(CoralScoring).map((topic: CoralScoring) => (
									<option key={ topic } value={ topic }>
										{ topic }
									</option>
								))
							}
						</TextField>
					</div>
				)}

				{selectedCategory === Topic.algae && (
					<div className="dropdown-buttons">
						<TextField
							select
							label="Ground Collection"
							value={ algaeGroundCollection }
							onChange={ (event) => setAlgaeGroundCollection(event.target.value as Topic) }
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(AlgaeGroundCollection).map((topic: AlgaeGroundCollection) => (
									<option key={ topic } value={ topic }>
										{ topic }
									</option>
								))
							}
						</TextField>

						<TextField
							select
							label="Reef Collection"
							value={ algaeReefCollection }
							onChange={ (event) => setAlgaeReefCollection(event.target.value as Topic) }
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(AlgaeReefCollection).map((topic: AlgaeReefCollection) => (
									<option key={ topic } value={ topic }>
										{ topic }
									</option>
								))
							}
						</TextField>

						<TextField
							select
							label="Processor"
							value={ algaeProcessor }
							onChange={ (event) => setAlgaeProcessor(event.target.value as Topic) }
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(AlgaeProcessor).map((topic: AlgaeProcessor) => (
									<option key={ topic } value={ topic }>
										{ topic }
									</option>
								))
							}
						</TextField>

						<TextField
							select
							label="Barge"
							value={ algaeBarge }
							onChange={ (event) => setAlgaeBarge(event.target.value as Topic) }
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(AlgaeBarge).map((topic: AlgaeBarge) => (
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
						value={ human }
						onChange={ (event) => setHuman(event.target.value as Topic) }
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
						value={ driver }
						onChange={ (event) => setDriver(event.target.value as Topic) }
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
						value={ climb }
						onChange={ (event) => setClimb(event.target.value as Topic) }
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
					<div className="dropdown-buttons">
						<TextField
							select
							label="Defense Skill"
							value={ defenseSkill }
							onChange={ (event) => setDefenseSkill(event.target.value as Topic) }
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(DefenseSkill).map((topic: DefenseSkill) => (
									<option key={ topic } value={ topic }>
										{ topic }
									</option>
								))
							}
						</TextField>
						<TextField
							select
							label="Defense Type"
							value={ defenseType }
							onChange={ (event) => setDefenseType(event.target.value as Topic) }
							variant="outlined"
							fullWidth
						>
							<option value="" disabled>Select a category</option>
							{
								Object.values(DefenseType).map((topic: DefenseType) => (
									<option key={ topic } value={ topic }>
										{ topic }
									</option>
								))
							}
						</TextField>
					</div>
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
