import React, { useState } from 'react';
import { Button, TextField, Select, FormControl, MenuItem, InputLabel } from '@mui/material';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Topic, Auto, Pathing, CoralGroundCollection, CoralStationCollection, CoralScoring, AlgaeGroundCollection, AlgaeReefCollection, AlgaeProcessor, AlgaeBarge, DriverAbility, HPAtProcessor, 
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	ClimbSkill, DefenseDriverSkill, Drivers, HumanP, Climb, DefenseSkill, DefenseType, AutoPlacementAccuracy, PathingDrivers, Gamemode, ISuperMatch } from '../../../models/models';
import { saveNote } from '../../../state/Actions';
import { useAppDispatch, useAppSelector } from '../../../state/Hooks';
import './QualitativeSection.scss';

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
			<NoteStatus />

			<p><strong>Selected Category:</strong> { selectedCategory ?? 'None' }</p>

			<div className="dropdown-buttons">
				{selectedCategory === Topic.auto && (
					<FormControl className='dropdown-buttons'>
						<InputLabel id="Placement-Accueact" style={{ color: '#babfb7' }}>Placement Accuracy</InputLabel>
						<Select
							style={{ color: '#babfb7' }}
							title='Placement-Accuracy'
							id="Placement-Accuracy"
							labelId='Placement Accuracy'
							value={ autoDrop }
							label="Placement-Accuracy"
							onChange={ (event) => setAutoDrop(event.target.value as string) }
							variant="outlined"
							fullWidth
						>
							<MenuItem key="option1" value={AutoPlacementAccuracy.NeverMiss}>Never Missed</MenuItem>
							<MenuItem key="option2" value={AutoPlacementAccuracy.MinimalMissed}>Minimal Missed</MenuItem>
							<MenuItem key="option3" value={AutoPlacementAccuracy.ManyMissed}>Many Missed</MenuItem>
						</Select>
					</FormControl>

				)}

				{selectedCategory === Topic.pathing && (
					<FormControl className='dropdown-buttons'>
						<InputLabel id="Pathing" style={{ color: '#babfb7' }}>Pathing</InputLabel>
						<Select
							style={{ color: '#babfb7' }}
							title='Pathing'
							id="Pathing"
							labelId='Pathing'
							value={ pathingDrop }
							label="pathing"
							onChange={ (event) => setPathingDrop(event.target.value as string) }
							variant="outlined"
							fullWidth

						>
							<MenuItem key="option1" value={PathingDrivers.NoCollision} >No collision</MenuItem>
							<MenuItem key="option2" value={PathingDrivers.MinimalCollisions}>Minimal Collisions</MenuItem>
							<MenuItem key="option3" value={PathingDrivers.ManyCollisions}>Many Collisions</MenuItem>
						</Select>
					</FormControl>

				)}

				{selectedCategory === Topic.coral && (
					<div className="dropdown-buttons">
						<FormControl className='dropdown-buttons'>
							<InputLabel id="Ground Collection" style={{ color: '#babfb7' }}>Ground Collection</InputLabel>
							<Select
								style={{ color: '#babfb7' }}
								title='Ground Collection'
								id="Ground-Collection"
								labelId='Ground-Collection'
								value={ coralGroundCollection }
								label="Ground-Collection"
								onChange={ (event) => setCoralGroundCollection(event.target.value as string) }
								variant="outlined"
								fullWidth
								
							>
								<MenuItem key="option1" value={CoralGroundCollection.QuickSnag}>Quick snag</MenuItem>
								<MenuItem key="option2" value={CoralGroundCollection.Align}>Align</MenuItem>
								<MenuItem key="option3" value={CoralGroundCollection.CantPickUp}>Cant pick up</MenuItem>
							</Select>
						</FormControl>

						<FormControl className='dropdown-buttons'>
							<InputLabel id="Station Collection" style={{ color: '#babfb7' }}>Station Collection</InputLabel>
							<Select
								style={{ color: '#babfb7' }}
								title='Station Collection'
								id="Station-Collection"
								labelId='Station-Collection'
								value={ coralStationCollection }
								label="Station-Collection"
								onChange={ (event) => setCoralStationCollection(event.target.value as string) }
								variant="outlined"
								fullWidth
								
							>
								<MenuItem key="option1" value={CoralStationCollection.QuickCollection}>Quick Collection</MenuItem>
								<MenuItem key="option2" value={CoralStationCollection.Align}>Align</MenuItem>
								<MenuItem key="option3" value={CoralStationCollection.DropPiece}>Drop Piece</MenuItem>
							</Select>
						</FormControl>

						<FormControl className='dropdown-buttons'>
							<InputLabel id="Scoring" style={{ color: '#babfb7' }}>Scoring</InputLabel>
							<Select
								style={{ color: '#babfb7' }}
								title='Scoring'
								id="scoring"
								labelId='scoring'
								value={ coralScoring }
								label="Scoring"
								onChange={ (event) => setCoralScoring(event.target.value as string) }
								variant="outlined"
								fullWidth
								
							>
								<MenuItem key="option1" value={CoralScoring.InstantPlace}>Instant Place</MenuItem>
								<MenuItem key="option2" value={CoralScoring.LongLineup}>Long lineup</MenuItem>
								<MenuItem key="option3" value={CoralScoring.CantPlace}>Cant Place</MenuItem>
							</Select>
						</FormControl> 
					</div>
				)}

				{selectedCategory === Topic.algae && (
					<div className="dropdown-buttons">
						<FormControl className='dropdown-buttons'>
							<InputLabel id="ground-collection" style={{ color: '#babfb7' }}>Ground Collection</InputLabel>
							<Select
								style={{ color: '#babfb7' }}
								title='Ground Collection'
								id="ground-collection"
								labelId='ground-collection'
								value={ algaeGroundCollection }
								label="Ground Collection"
								onChange={ (event) => setAlgaeGroundCollection(event.target.value as string) }
								variant="outlined"
								fullWidth
								
							>
								<MenuItem key="option1" value={AlgaeGroundCollection.GoodPickUp}>Good pick up</MenuItem>
								<MenuItem key="option2" value={AlgaeGroundCollection.PushesIt}>Pushes it</MenuItem>
								<MenuItem key="option3" value={AlgaeGroundCollection.CantPickItUp}>Cant pick it up</MenuItem>
							</Select>
						</FormControl> 

						<FormControl className='dropdown-buttons'>
							<InputLabel id="reef-collection" style={{ color: '#babfb7' }}>Reef Collection</InputLabel>
							<Select
								style={{ color: '#babfb7' }}
								title='Reef Collection'
								id="reef-collection"
								labelId='reef-collection'
								value={ algaeReefCollection }
								label="Barge"
								onChange={ (event) => setAlgaeReefCollection(event.target.value as string) }
								variant="outlined"
								fullWidth
								
							>
								<MenuItem key="option1" value={AlgaeReefCollection.GoodPickUp}>Good Pick Up</MenuItem>
								<MenuItem key="option2" value={AlgaeReefCollection.LongAlignment}>Long Alignment</MenuItem>
								<MenuItem key="option3" value={AlgaeReefCollection.KnocksItDown}>Knocks it down</MenuItem>
							</Select>
						</FormControl>

						<FormControl className='dropdown-buttons'>
							<InputLabel id="algae-processor" style={{ color: '#babfb7' }}>Processor</InputLabel>
							<Select
								style={{ color: '#babfb7' }}
								title='Processor'
								id="algae-processor"
								labelId='algae-processor'
								value={ algaeProcessor }
								label="Processor"
								onChange={ (event) => setAlgaeProcessor(event.target.value as string) }
								variant="outlined"
								fullWidth
								
							>
								<MenuItem key="option1" value={AlgaeProcessor.InstantPlace}>Instant Place</MenuItem>
								<MenuItem key="option2" value={AlgaeProcessor.LongAlignment}>Long Alignment</MenuItem>
								<MenuItem key="option3" value={AlgaeProcessor.NoMechanismToScore}>No mechanism to score</MenuItem>
							</Select>
						</FormControl>

						<FormControl className='dropdown-buttons'>
							<InputLabel id="algae-barge" style={{ color: '#babfb7' }}>Barge</InputLabel>
							<Select
								style={{ color: '#babfb7' }}
								title='Barge'
								id="algae-barge"
								labelId='algae-barge'
								value={ algaeBarge }
								label="Barge"
								onChange={ (event) => setAlgaeBarge(event.target.value as string) }
								variant="outlined"
								fullWidth
								
							>
								<MenuItem key="option1" value={AlgaeBarge.InstantScore}>Instant Score</MenuItem>
								<MenuItem key="option2" value={AlgaeBarge.NeedsToLineUp}>Needs to line up</MenuItem>
								<MenuItem key="option3" value={AlgaeBarge.CantScore}>Can't Score</MenuItem>
							</Select>
						</FormControl>
					</div>
				)}

				{selectedCategory === Topic.hp && (
					<FormControl className='dropdown-buttons'>
						<InputLabel id="human-player-dropdown" style={{ color: '#babfb7' }}>Human Player</InputLabel>
						<Select
							style={{ color: '#babfb7' }}
							title='Human Player'
							id="human-player-dropdown"
							labelId='human-player-dropdown'
							value={ human }
							label="Human Player"
							onChange={ (event) => setHuman(event.target.value as string) }
							variant="outlined"
							fullWidth
							
						>
							<MenuItem key="option1" value={HPAtProcessor.MichaelJordan}>MICHAEL JORDAN</MenuItem>
							<MenuItem key="option2" value={HPAtProcessor.Middle}>Middle</MenuItem>
							<MenuItem key="option3" value={HPAtProcessor.NotAtProcessor}>Not at processor</MenuItem>
						</Select>
					</FormControl>
				)}

				{selectedCategory === Topic.drivers && (
					<FormControl className='dropdown-buttons'>
						<InputLabel id="driver-skill-dropdown" style={{ color: '#babfb7' }}>Driver Skill</InputLabel>
						<Select
							style={{ color: '#babfb7' }}
							title='Driver Skill'
							id="driver-skill-dropdown"
							labelId='driver-skill-dropdown'
							value={ driver }
							label="Driver Skill"
							onChange={ (event) => setDriver(event.target.value as string) }
							variant="outlined"
							fullWidth
							
						>
							<MenuItem key="option1" value={DriverAbility.SmoothOperator}>Smooth Operator</MenuItem>
							<MenuItem key="option2" value={DriverAbility.SlowDecisions}>Slow Decision</MenuItem>
							<MenuItem key="option3" value={DriverAbility.LackOfDrive}>Lack of Drive</MenuItem>
						</Select>
					</FormControl>
				)}

				{selectedCategory === Topic.climb && (
					<FormControl className='dropdown-buttons'>
						<InputLabel id="climb" style={{ color: '#babfb7' }}>Climb</InputLabel>
						<Select
							style={{ color: '#babfb7' }}
							title='Climb'
							id="climb"
							labelId='climb'
							value={ climb }
							label="Climb"
							onChange={ (event) => setClimb(event.target.value as string) }
							variant="outlined"
							fullWidth
							
						>
							<MenuItem key="option1" value={ClimbSkill.FastOrSturdy}>Fast or sturdy climb</MenuItem>
							<MenuItem key="option2" value={ClimbSkill.SlowOrWobbly}>Slow or Wobbly Climb</MenuItem>
							<MenuItem key="option3" value={ClimbSkill.ShouldNotHang}>That bot should not be hanging</MenuItem>
						</Select>
					</FormControl> 
				)}

				{selectedCategory === Topic.defense && (
					<div className="dropdown-buttons">
						<FormControl className='dropdown-buttons'>
							<InputLabel id="defense" style={{ color: '#babfb7' }}>Defense Skill</InputLabel>
							<Select
								style={{ color: '#babfb7' }}
								title='Defense Skill'
								id="defense-skill"
								labelId='defense-skill'
								value={ defenseSkill }
								label="Defense Skill"
								onChange={ (event) => setDefenseSkill(event.target.value as string) }
								variant="outlined"
								fullWidth
								
							>
								<MenuItem key="option1" value={DefenseDriverSkill.EffectiveDefense}>Effective defense</MenuItem>
								<MenuItem key="option2" value={DefenseDriverSkill.NotVeryGood}>Not very good</MenuItem>
								<MenuItem key="option3" value={DefenseDriverSkill.NotPlayed}>Defense not played</MenuItem>
							</Select>
						</FormControl> 
						<FormControl className='dropdown-buttons'>
							<InputLabel id="defense type" style={{ color: '#babfb7' }}>Defense Type</InputLabel>
							<Select
								style={{ color: '#babfb7' }}
								title='Defense Type'
								id="defense-type"
								labelId='defense-type'
								value={ defenseType }
								label="Defense Type"
								onChange={ (event) => setDefenseType(event.target.value as string) }
								variant="outlined"
								fullWidth
								
							>
								<MenuItem key="option1" value={DefenseType.ZoneDefense}>Zone Defense</MenuItem>
								<MenuItem key="option2" value={DefenseType.TargetedDefense}>Targeted Defense</MenuItem>
								<MenuItem key="option3" value={DefenseType.NoDefense}>No Defense</MenuItem>
							</Select>
						</FormControl> 
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
