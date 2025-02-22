import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import {
	ISuperMatch,
	Topic
} from '../../../models/models';
import { saveNote } from '../../../state/Actions';
import { useAppDispatch, useAppSelector } from '../../../state/Hooks';
import './QualitativeSection.scss';
import {
	AlgaeBarge,
	AlgaeGroundCollection, AlgaeProcessor, AlgaeReefCollection,
	AutoPlacementAccuracy, ClimbSkill,
	CoralGroundCollection, CoralScoring,
	CoralStationCollection, DefenseDriverSkill, DefenseType, DriverAbility,
	DriverPathing, HpAtProcessor
} from '../../../models/superscout-constants';

export default function QualitativeSection() {
	const dispatch = useAppDispatch();

	const [selectedCategory, setSelectedCategory] = useState<Topic>(null);
	const [noteContent, setNoteContent] = useState<string>('');
	const savedNotes: Record<Topic, string> = useAppSelector(state => state.notes);

	const [autoDrop, setAutoDrop] = useState<string>('');
	const [pathingDrop, setPathingDrop] = useState<string>('');

	const [coralGroundCollection, setCoralGroundCollection] = useState<string>('');
	const [coralStationCollection, setCoralStationCollection] = useState<string>('');
	const [coralScoring, setCoralScoring] = useState<string>('');

	const [algaeGroundCollection, setAlgaeGroundCollection] = useState<string>('');
	const [algaeReefCollection, setAlgaeReefCollection] = useState<string>('');
	const [algaeProcessor, setAlgaeProcessor] = useState<string>('');
	const [algaeBarge, setAlgaeBarge] = useState<string>('');

	const [driver, setDriver] = useState<string>('');

	const [human, setHuman] = useState<string>('');

	const [climb, setClimb] = useState<string>('');

	const [defenseSkill, setDefenseSkill] = useState<string>('');
	const [defenseType, setDefenseType] = useState<string>('');

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
			<NoteStatus/>

			<p><strong>Selected Category:</strong> { selectedCategory ?? 'None' }</p>

			<div className="dropdown-buttons">
				{ selectedCategory === Topic.auto && (
					<Dropdown
						id="placement-accuracy"
						label="Placement Accuracy"
						value={ autoDrop }
						options={ AutoPlacementAccuracy }
						onChange={ setAutoDrop }
					/>
				)}

				{ selectedCategory === Topic.pathing && (
					<Dropdown
						id="pathing"
						label="Pathing"
						value={ pathingDrop }
						options={ DriverPathing }
						onChange={ setPathingDrop }
					/>
				)}

				{ selectedCategory === Topic.coral && (
					<div className="dropdown-buttons">
						<Dropdown
							id="coral-ground-collection"
							label="Ground Collection"
							value={ coralGroundCollection }
							options={ CoralGroundCollection }
							onChange={ setCoralGroundCollection }
						/>
						<Dropdown
							id="station-collection"
							label="Station Collection"
							value={ coralStationCollection }
							options={ CoralStationCollection }
							onChange={ setCoralStationCollection }
						/>
						<Dropdown
							id="scoring"
							label="Scoring"
							value={ coralScoring }
							options={ CoralScoring }
							onChange={ setCoralScoring }
						/>
					</div>
				)}

				{ selectedCategory === Topic.algae && (
					<div className="dropdown-buttons">
						<Dropdown
							id="algae-ground-collection"
							label="Ground Collection"
							value={ algaeGroundCollection }
							options={ AlgaeGroundCollection }
							onChange={ setAlgaeGroundCollection }
						/>
						<Dropdown
							id="algae-reef-collection"
							label="Reef Collection"
							value={ algaeReefCollection }
							options={ AlgaeReefCollection }
							onChange={ setAlgaeReefCollection }
						/>
						<Dropdown
							id="algae-processor"
							label="Processor"
							value={ algaeProcessor }
							options={ AlgaeProcessor }
							onChange={ setAlgaeProcessor }
						/>
						<Dropdown
							id="algae-barge"
							label="Barge"
							value={ algaeBarge }
							options={ AlgaeBarge }
							onChange={ setAlgaeBarge }
						/>
					</div>
				)}

				{ selectedCategory === Topic.hp && (
					<Dropdown
						id="human-player-dropdown"
						label="Human Player"
						value={ human }
						options={ HpAtProcessor }
						onChange={ setHuman }
					/>
				)}

				{ selectedCategory === Topic.drivers && (
					<Dropdown
						id="driver-skill-dropdown"
						label="Driver Skill"
						value={ driver }
						options={ DriverAbility }
						onChange={ setDriver }
					/>
				)}

				{ selectedCategory === Topic.climb && (
					<Dropdown
						id="climb-dropdown"
						label="Climb"
						value={ climb }
						options={ ClimbSkill }
						onChange={ setClimb }
					/>
				)}

				{ selectedCategory === Topic.defense && (
					<div className="dropdown-buttons">
						<Dropdown
							id="defense-skill-dropdown"
							label="Defense Skill"
							value={ defenseSkill }
							options={ DefenseDriverSkill }
							onChange={ setDefenseSkill }
						/>
						<Dropdown
							id="defense-type-dropdown"
							label="Defense Type"
							value={ defenseType }
							options={ DefenseType }
							onChange={ setDefenseType }
						/>
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
					marginBottom: '16px'
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

interface IDropdownProps {
	id: string;
	value: string;
	label: string;
	options: ISuperMatch[]
	onChange: (value: string) => void;
}

function Dropdown(props: IDropdownProps) {
	const labelId = props.id + '__label';
	return (
		<FormControl className="dropdown-wrapper" margin="dense">
			<InputLabel id={ labelId } style={{ color: '#babfb7' }}>{ props.label }</InputLabel>
			<Select
				id={ props.id }
				labelId={ labelId }
				value={ props.value }
				label={ props.label }
				style={{ color: '#babfb7' }}
				variant="outlined"
				fullWidth={ true }
				onChange={ (event) => props.onChange(event.target.value) }
			>
				{
					props.options.map(option => (
						<MenuItem key={ option.key } value={ option.key }>{ option.name }</MenuItem>
					))
				}
			</Select>
		</FormControl>
	);
}
