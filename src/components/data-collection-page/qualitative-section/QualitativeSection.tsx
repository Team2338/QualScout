import React, { useState } from 'react';
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
	DriverPathing
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
						<button
							key={topic}
							className={`category-button ${selectedCategory === topic ? 'selected' : ''}`}
							onClick={() => handleButtonClick(topic)}
							type="button"
						>
							{topic}
						</button>
					))
				}
			</div>
		);
	}

	return (
		<div className="qualitative-section">
			<h1 className="section-title">Categories</h1>
			<NoteStatus/>

			<p className="selected-category"><strong>Selected Category:</strong> {selectedCategory ?? 'None'}</p>

			<div className="dropdown-buttons">
				{selectedCategory === Topic.auto && (
					<Dropdown
						id="placement-accuracy"
						label="Placement Accuracy"
						subtopic={Subtopic.autoPlacementAccuracy}
						options={AutoPlacementAccuracy}
					/>
				)}

				{selectedCategory === Topic.pathing && (
					<Dropdown
						id="pathing"
						label="Pathing"
						subtopic={Subtopic.pathingDrivers}
						options={DriverPathing}
					/>
				)}

				{selectedCategory === Topic.collection && (
					<div className="dropdown-group">
						<Dropdown
							id="field-collection"
							label="Field Collection"
							subtopic={Subtopic.coralGroundCollection}
							options={CoralGroundCollection}
						/>
						<Dropdown
							id="goal-collection"
							label="Goal Collection"
							subtopic={Subtopic.coralStationCollection}
							options={CoralStationCollection}
						/>
					</div>
				)}

				{selectedCategory === Topic.scoring && (
					<div className="dropdown-group">
						{/* No subcategories for scoring */}
					</div>
				)}

				{selectedCategory === Topic.drivers && (
					<Dropdown
						id="driver-skill-dropdown"
						label="Driver Skill"
						subtopic={Subtopic.driverAbility}
						options={DriverAbility}
					/>
				)}

				{selectedCategory === Topic.climb && (
					<Dropdown
						id="climb-dropdown"
						label="Climb"
						subtopic={Subtopic.climbSkill}
						options={ClimbSkill}
					/>
				)}

				{selectedCategory === Topic.defense && (
					<div className="dropdown-group">
						<Dropdown
							id="defense-skill-dropdown"
							label="Defense Skill"
							subtopic={Subtopic.defenseDriverSkill}
							options={DefenseDriverSkill}
						/>
						<Dropdown
							id="defense-type-dropdown"
							label="Defense Type"
							subtopic={Subtopic.defenseType}
							options={DefenseType}
						/>
					</div>
				)}
			</div>

			<div className="text-area-wrapper">
				<textarea
					className="note-textarea"
					placeholder="Enter your text here..."
					value={noteContent}
					onChange={(event) => setNoteContent(event.target.value)}
					rows={10}
					disabled={selectedCategory === null}
				/>
			</div>

			<button 
				className="save-button" 
				onClick={submit} 
				disabled={selectedCategory === null}
				type="button"
			>
				Save Note
			</button>

			<h2 className="section-title">Saved Notes</h2>
			<ul className="submitted-notes">
				{
					Object.values(Topic).map((topic: Topic) => (
						savedNotes[topic] && (
							<li key={topic}>
								<strong>{topic}:</strong>
								<p>{savedNotes[topic]}</p>
							</li>
						)
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
		<div className="form-field">
			<select
				id={props.id}
				value={value}
				onChange={(event) => dispatch(setSuperNote(props.subtopic, event.target.value))}
			>
				<option value="">Do not report</option>
				{
					props.options.map(option => (
						<option key={option.key} value={option.key}>
							{option.name}
						</option>
					))
				}
			</select>
			<label htmlFor={props.id}>{props.label}</label>
		</div>
	);
}
