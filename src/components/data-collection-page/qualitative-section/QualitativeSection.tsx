import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ISuperMatch, Subtopic, Topic } from '../../../models/models';
import { saveNote, setSuperNote } from '../../../state/Actions';
import { useAppDispatch, useAppSelector } from '../../../state/Hooks';
import './QualitativeSection.scss';
import {
	AlgaeBarge,
	AlgaeGroundCollection,
	AlgaeProcessor,
	AlgaeReefCollection,
	AutoPlacementAccuracy,
	ClimbSkill,
	CoralGroundCollection,
	CoralScoring,
	CoralStationCollection,
	DefenseDriverSkill,
	DefenseType,
	DriverAbility,
	DriverPathing,
	HpAtProcessor
} from '../../../models/superscout-constants';

export default function QualitativeSection() {
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
						subtopic={ Subtopic.autoPlacementAccuracy }
						options={ AutoPlacementAccuracy }
					/>
				)}

				{ selectedCategory === Topic.pathing && (
					<Dropdown
						id="pathing"
						label="Pathing"
						subtopic={ Subtopic.pathingDrivers }
						options={ DriverPathing }
					/>
				)}

				{ selectedCategory === Topic.coral && (
					<div className="dropdown-buttons">
						<Dropdown
							id="coral-ground-collection"
							label="Ground Collection"
							subtopic={ Subtopic.coralGroundCollection }
							options={ CoralGroundCollection }
						/>
						<Dropdown
							id="station-collection"
							label="Station Collection"
							subtopic={ Subtopic.coralStationCollection}
							options={ CoralStationCollection }
						/>
						<Dropdown
							id="scoring"
							label="Scoring"
							subtopic={ Subtopic.coralScoring }
							options={ CoralScoring }
						/>
					</div>
				)}

				{ selectedCategory === Topic.algae && (
					<div className="dropdown-buttons">
						<Dropdown
							id="algae-ground-collection"
							label="Ground Collection"
							subtopic={ Subtopic.algaeGroundCollection }
							options={ AlgaeGroundCollection }
						/>
						<Dropdown
							id="algae-reef-collection"
							label="Reef Collection"
							subtopic={ Subtopic.algaeReefCollection }
							options={ AlgaeReefCollection }
						/>
						<Dropdown
							id="algae-processor"
							label="Processor"
							subtopic={ Subtopic.algaeProcessor}
							options={ AlgaeProcessor }
						/>
						<Dropdown
							id="algae-barge"
							label="Barge"
							subtopic={ Subtopic.algaeBarge }
							options={ AlgaeBarge }
						/>
					</div>
				)}

				{ selectedCategory === Topic.hp && (
					<Dropdown
						id="human-player-dropdown"
						label="Human Player"
						subtopic={ Subtopic.hpAtProcessor }
						options={ HpAtProcessor }
					/>
				)}

				{ selectedCategory === Topic.drivers && (
					<Dropdown
						id="driver-skill-dropdown"
						label="Driver Skill"
						subtopic={ Subtopic.driverAbility }
						options={ DriverAbility }
					/>
				)}

				{ selectedCategory === Topic.climb && (
					<Dropdown
						id="climb-dropdown"
						label="Climb"
						subtopic={ Subtopic.climbSkill }
						options={ ClimbSkill }
					/>
				)}

				{ selectedCategory === Topic.defense && (
					<div className="dropdown-buttons">
						<Dropdown
							id="defense-skill-dropdown"
							label="Defense Skill"
							subtopic={ Subtopic.defenseDriverSkill }
							options={ DefenseDriverSkill }
						/>
						<Dropdown
							id="defense-type-dropdown"
							label="Defense Type"
							subtopic={ Subtopic.defenseType }
							options={ DefenseType }
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
	label: string;
	subtopic: Subtopic;
	options: ISuperMatch[];
}

function Dropdown(props: IDropdownProps) {
	const dispatch = useAppDispatch();
	const value = useAppSelector(state => state.superNotes[props.subtopic]);
	const labelId = props.id + '__label';
	return (
		<FormControl className="dropdown-wrapper" margin="dense">
			<InputLabel id={ labelId } style={{ color: '#babfb7' }}>{ props.label }</InputLabel>
			<Select
				id={ props.id }
				labelId={ labelId }
				value={ value }
				label={ props.label }
				style={{ color: '#babfb7' }}
				variant="outlined"
				fullWidth={ true }
				onChange={ (event) => dispatch(setSuperNote(props.subtopic, event.target.value)) }
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
