import './RobotNumberInput.scss';
import { LoadStatus } from '../../../../models/state';
import { useAppSelector } from '../../../../state/Hooks';
import { IMatchLineup } from '../../../../models/models';
import {
	CircularProgress,
	FormControl,
	InputLabel,
	ListSubheader,
	MenuItem,
	Select,
	SelectChangeEvent
} from '@mui/material';
import React from 'react';
import TextField from '@mui/material/TextField';

export default function RobotNumberInput(props: {
	matchNumber: string;
	robotNumber: string;
	setRobotNumber: (robotNumber: string) => void;
}) {
	const scheduleLoadStatus: LoadStatus = useAppSelector(state => state.schedule.loadStatus);
	const schedule: IMatchLineup[] = useAppSelector(state => state.schedule.data);

	if (scheduleLoadStatus === LoadStatus.none || scheduleLoadStatus === LoadStatus.loading) {
		return (
			<div className="robot-number-loader">
				<div className="textbox-placeholder">Robot Number</div>
				<CircularProgress className="spin-loader" color="primary" size={40} />
			</div>
		);
	}

	if (scheduleLoadStatus === LoadStatus.fail) {
		return <ManualRobotNumber {...props} />
	}

	const matchIndex = Number.parseInt(props.matchNumber) - 1;
	if (Number.isNaN(matchIndex)) {
		return (
			<RobotDropdownWrapper value="" disabled={ true }>
				<MenuItem value="">None</MenuItem>
			</RobotDropdownWrapper>
		);
	}

	const isValidMatchNumber: boolean = (
		matchIndex >= 0
		&& matchIndex < schedule.length
	);
	if (!isValidMatchNumber) {
		return <ManualRobotNumber {...props} />;
	}

	const lineup: IMatchLineup = schedule[matchIndex];
	const redRobots = [lineup.red1, lineup.red2, lineup.red3]
		.map(String)
		.map((robot: string) => <MenuItem key={ robot } value={ robot }>{ robot }</MenuItem>);
	const blueRobots = [lineup.blue1, lineup.blue2, lineup.blue3]
		.map(String)
		.map((robot: string) => <MenuItem key={ robot } value={ robot }>{ robot }</MenuItem>);

	return (
		<RobotDropdownWrapper value={ props.robotNumber } onChange={ robotNumber => props.setRobotNumber(robotNumber) }>
			<MenuItem value="">None</MenuItem>
			<ListSubheader sx={{ color: '#aa3333', fontWeight: 600 }}>Red</ListSubheader>
			{ redRobots }
			<ListSubheader sx={{ color: '#2255cc', fontWeight: 600 }}>Blue</ListSubheader>
			{ blueRobots }
		</RobotDropdownWrapper>
	);
};

function RobotDropdownWrapper(props: {
	value: string;
	disabled?: boolean;
	onChange?: (value: string) => void;
	children: React.ReactNode;
}) {
	return (
		<FormControl margin="dense">
			<InputLabel id="robot-number-label" style={{ opacity: (props.disabled ? 0.6 : 1) }}>Robot Number</InputLabel>
			<Select
				id="robot-number-dropdown"
				labelId="robot-number-label"
				label="Robot Number"
				variant="outlined"
				value={ props.value }
				disabled={ props.disabled }
				onChange={ (event: SelectChangeEvent) => props.onChange(event.target.value) }
				sx={{ width: 'calc(10em + 35px)', opacity: (props.disabled ? 0.6 : 1) }}
			>
				{ props.children }
			</Select>
		</FormControl>
	);
}

function ManualRobotNumber(props: {
	robotNumber: string;
	setRobotNumber: (robotNumber: string) => void;
}) {
	return (
		<TextField
			label="Robot Number"
			variant="outlined"
			margin="dense"
			type="number"
			inputMode="numeric"
			placeholder="Robot Number"
			value={ props.robotNumber }
			onChange={ (event) => props.setRobotNumber(event.target.value) }
		/>
	);
}
