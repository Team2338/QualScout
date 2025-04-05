import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import './MatchInformation.scss';
import RobotNumberInput from './robot-number-input/RobotNumberInput';

interface IProps {
	robotNumber: string;
	setRobotNumber: (value: string) => void;
	matchNumber: string;
	setMatchNumber: (value: string) => void;
}

function MatchInformation(props: IProps) {
	return (
		<div className="match-information">
			<img className="logo" src="2338-logo.png" alt="2338 logo" height="100rem" />
			<div className="textboxes">
				<TextField
					label="Match Number"
					variant="outlined"
					margin="dense"
					type="number"
					inputMode="tel"
					placeholder="Match Number"
					value={ props.matchNumber }
					onChange={ (event) => {
						props.setMatchNumber(event.target.value);
						props.setRobotNumber('');
					}}
				/>
				<RobotNumberInput
					matchNumber={ props.matchNumber }
					robotNumber={ props.robotNumber }
					setRobotNumber={ props.setRobotNumber }
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
