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
		<div className="wrap">
			<div className="logo">
				<img src="2338-logo.png" alt="2338 logo" height="100rem"/>
			</div>
			<div className="textboxes">
				<TextField
					label="Team Number"
					variant="standard"
					sx={{ '& .MuiFormLabel-root': { color: 'primary.main' }, m: 0.5 }}
					placeholder="Team Number"
					value={props.scoutingTeamNumber}
					onChange={(event) => {
						return props.setScoutingTeamNumber(event.target.value);
					}}
				/>
				<TextField
					label="Match Number"
					variant="standard"
					sx={{ '& .MuiFormLabel-root': { color: 'primary.main' }, m: 0.5 }}
					placeholder="Match Number"
					value={props.matchNumber}
					onChange={(event) => props.setMatchNumber(event.target.value)}
				/>
			</div>
			<div className="analytics">
				<Button sx={{ m: 0.5 }} variant="contained" href="https://data.gearitforward.com/">Analytics</Button>
			</div>
		</div>
	);
}


export default MatchInformation;
