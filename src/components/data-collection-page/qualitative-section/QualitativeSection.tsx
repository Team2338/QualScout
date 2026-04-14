import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ISuperMatch, INote, Subtopic, Topic } from '../../../models/models';
import { saveNote, setSuperNote } from '../../../state/Actions';
import { useAppDispatch, useAppSelector } from '../../../state/Hooks';
import './QualitativeSection.scss';
import {
	GroundCollection,
	DefenseDriverSkill,
	DriverAbility,
	DriverPathing,
	HopperFullness,
	ClimbSpeed,
	ClimbStability,
	PassingSkill,
} from '../../../models/superscout-constants';

export default function QualitativeSection() {
	const dispatch = useAppDispatch();

	const [selectedCategory, setSelectedCategory] = useState<Topic>(null);
	const [noteContent, setNoteContent] = useState<string>('');
	const [incompleteNotes, setIncompleteNotes] = useState<INote[]>([]);
	const savedNotes: Record<Topic, string> = useAppSelector(state => state.notes);


	const storeNote = (topic: Topic, note: string) => {
		//First remove any notes of the same topic
		let notes: INote[] = [];
		incompleteNotes.forEach((note: INote) => {
			if(note.topic != topic) notes.push(note);
		});

		//Then add the new notes
		notes.push({topic: topic, content: note});
		setIncompleteNotes(notes);
	}

	const recallNote = (topic: Topic) => {
		const note = incompleteNotes.find((note: INote) =>  {
			return note.topic == topic
		});

		if (note) {
				setSelectedCategory(note.topic);
				setNoteContent(note.content);
		}
	}

	const submit = (event): void => {
		event.preventDefault();
		if (selectedCategory !== null) {
			dispatch(saveNote(selectedCategory, noteContent));
			setNoteContent('');
			setSelectedCategory(null);
			storeNote(selectedCategory, '');
		}
	};

	return (
		<div className="qualitative-section">
			<h1>Categories</h1>
			<div className="category-buttons">
				{
					Object.values(Topic).map((topic: Topic) => (
						<Button
							key={ topic }
							variant="contained"
							onClick={ () => {
								if (noteContent != '') storeNote(selectedCategory, noteContent);
								setNoteContent(savedNotes[topic]);
								setSelectedCategory(topic);
								recallNote(topic);
							}}
						>
							{ topic }
						</Button>
					))
				}
			</div>

			<p><strong>Selected Category:</strong> { selectedCategory ?? 'None' }</p>

			<div className="dropdown-buttons">

				{ selectedCategory === Topic.collector && (
					<div className="dropdown-buttons">
						<Dropdown
							id="ground-collection"
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

				{ selectedCategory === Topic.drivers && (
					<div className="dropdown-buttons">
						<Dropdown
							id="driver-skill-dropdown"
							label="Gameplay"
							subtopic={ Subtopic.driverAbility }
							options={ DriverAbility }
						/>
						<Dropdown
							id="pathing"
							label="Robot control"
							subtopic={ Subtopic.pathingDrivers }
							options={ DriverPathing }
						/>
					</div>
				)}

				{ selectedCategory === Topic.support && (
					<div className="dropdown-buttons">
						<Dropdown
							id="passing-skill-dropdown"
							label="Passing Skill"
							subtopic={ Subtopic.passingSkill }
							options={ PassingSkill }
						/>
						<Dropdown
							id="defense-skill-dropdown"
							label="Defense Skill"
							subtopic={ Subtopic.defenseDriverSkill }
							options={ DefenseDriverSkill }
						/>
					</div>
				)}

				{ selectedCategory === Topic.other && (
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
						<MenuItem
							key={ option.key }
							value={ option.key }
							style={{ color: '#000' }}
						>
							{ option.name }
						</MenuItem>
					))
				}
			</Select>
		</FormControl>
	);
}
