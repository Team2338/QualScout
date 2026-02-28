import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ISuperMatch, Subtopic, Topic } from '../../../models/models';
import { saveNote, setSuperNote } from '../../../state/Actions';
import { useAppDispatch, useAppSelector } from '../../../state/Hooks';
import './QualitativeSection.scss';
import {
	AutoShootingAccuracy,
	GroundCollection,
	ScoringAccuracy,
	DefenseDriverSkill,
	DefenseType,
	DriverAbility,
	DriverPathing,
	HopperFullness,
	YesNo,
	ClimbSpeed,
	ClimbStability,
	ScoringMobility
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
					<div className="dropdown-buttons">
						<Dropdown
							id="auto-accuracy"
							label="Shooting Accuracy"
							subtopic={ Subtopic.autoShootingAccuracy }
							options={ AutoShootingAccuracy }
						/>
					</div>
				)}

				{ selectedCategory === Topic.pathing && (
					<Dropdown
						id="pathing"
						label="Pathing"
						subtopic={ Subtopic.pathingDrivers }
						options={ DriverPathing }
					/>
				)}

				{ selectedCategory === Topic.collector && (
					<div className="dropdown-buttons">
						<Dropdown
							id="coral-ground-collection"
							label="Ground Collection"
							subtopic={ Subtopic.groundCollection }
							options={ GroundCollection }
						/>
						<Dropdown
							id="hopper-fullness"
							label="Hopper Fullness"
							subtopic={ Subtopic.hopperFullness }
							options={ HopperFullness }
						/>
					</div>
				)}

				{ selectedCategory === Topic.shooter && (
					<div className="dropdown-buttons">
						<Dropdown
							id="shooter-accuracy"
							label="Accuracy"
							subtopic={ Subtopic.scoringAccuracy }
							options={ ScoringAccuracy }
						/>
						<Dropdown
							id="shooter-mobility"
							label="Mobility while shooting"
							subtopic={ Subtopic.scoringMobility }
							options={ ScoringMobility }
						/>
					</div>
				)}

				{ selectedCategory === Topic.drivers && (
					<div className="dropdown-buttons">
						<Dropdown
							id="driver-skill-dropdown"
							label="Driver Skill"
							subtopic={ Subtopic.driverAbility }
							options={ DriverAbility }
						/>
						<Dropdown
							id="did-surf-dropdown"
							label="Did Surf"
							subtopic={ Subtopic.didSurf }
							options={ YesNo }
						/>
					</div>
				)}

				{ selectedCategory === Topic.climb && (
					<div className="dropdown-buttons">
						<Dropdown
							id="climb-stability-dropdown"
							label="Climb Stability"
							subtopic={ Subtopic.climbStability }
							options={ ClimbStability }
						/>
						<Dropdown
							id="climb-speed-dropdown"
							label="Climb Speed"
							subtopic={ Subtopic.climbSpeed }
							options={ ClimbSpeed }
						/>
					</div>
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
				variant="outlined"
				fullWidth={ true }
				onChange={ (event) => dispatch(setSuperNote(props.subtopic, event.target.value)) }
			>
				<MenuItem value="" style={{ fontStyle: 'italic', color: '#707070' }}>Do not report</MenuItem>
				{
					props.options.map(option => (
						<MenuItem key={ option.key } value={ option.key } style={{ color: '#000' }}>{ option.name }</MenuItem>
					))
				}
			</Select>
		</FormControl>
	);
}
