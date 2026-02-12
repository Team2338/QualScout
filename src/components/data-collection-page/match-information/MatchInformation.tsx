import TextField from '@mui/material/TextField';
import React from 'react';
import './MatchInformation.scss';

interface IProps {
	robotNumber: string;
	setRobotNumber: (value: string) => void;
	matchNumber: string;
	setMatchNumber: (value: string) => void;
}

function MatchInformation(props: IProps) {
	return (
		<div className="match-information">
			<div className="header-main">
				<div className="logo">
					<img src="2338-logo.png" alt="2338 logo" height={100} width={100} />
				</div>
				<div className="analytics">
					<a href="https://data.gearitforward.com/" className="analytics-button">
						ANALYTICS
					</a>
				</div>
			</div>
			<div className="textboxes">
				<TextField
					label="Match Number"
					variant="outlined"
					margin="dense"
					type="number"
					inputMode="tel"
					placeholder="Match Number"
					value={ props.matchNumber }
					onChange={ (event) => props.setMatchNumber(event.target.value) }
					sx={{ 
						'& .MuiOutlinedInput-root': { 
							backgroundColor: 'transparent' 
						}
					}}
					InputLabelProps={{
						sx: { backgroundColor: 'transparent' }
					}}
				/>
				<TextField
					label="Team Number"
					variant="outlined"
					margin="dense"
					type="number"
					inputMode="numeric"
					placeholder="Team Number"
					value={ props.robotNumber }
					onChange={ (event) => props.setRobotNumber(event.target.value) }
					sx={{ 
						'& .MuiOutlinedInput-root': { 
							backgroundColor: 'transparent' 
						}
					}}
					InputLabelProps={{
						sx: { backgroundColor: 'transparent' }
					}}
				/>
			</div>
		</div>
	);
}

export default MatchInformation;
