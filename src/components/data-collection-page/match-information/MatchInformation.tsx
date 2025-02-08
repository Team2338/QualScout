import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import './MatchInformation.scss';

interface IProps {
	scoutingTeamNumber: string;
	setScoutingTeamNumber: (value: string) => void;
	matchNumber: string;
	setMatchNumber: (value: string) => void;
}

function MatchInformation(props: IProps) {
	return (
		<div className="match-information">
			<img className="logo" src="2338-logo.png" alt="2338 logo" height="100rem" />
			<div className="textboxes">
				<TextField
					label="Team Number"
					variant="outlined"
					type="number"
					placeholder="Team Number"
					value={ props.scoutingTeamNumber }
					onChange={ (event) => props.setScoutingTeamNumber(event.target.value) }
				/>
				<TextField
					label="Match Number"
					variant="outlined"
					type="number"
					placeholder="Match Number"
					value={ props.matchNumber }
					onChange={ (event) => props.setMatchNumber(event.target.value) }
				/>
			</div>
			<div className="analytics">
				<Button
					variant="contained"
					href="https://data.gearitforward.com/"
					disableElevation={ true }
				>
					Analytics&nbsp;&gt;
				</Button>
			</div>
		</div>
	);
}

export default MatchInformation;
