import Button from '@mui/material/Button';
import React from 'react';
import Grid from '../shared/grid/Grid';
import DockedTeleop from './DockedTeleop';
import './Teleop.scss';
import TeleopChargeStationInfoButton from './TeleopChargeStationInfoButton';
import TeleopGridInfoButton from './TeleopGridInfoButton';


function Teleop(props) {
	return (
		<div className="background">
			<h1 className="text">Teleop</h1>
			<Button
				style={{ textTransform: 'capitalize' }}
				variant={props.isNullified ? 'contained' : 'outlined'}
				onClick={() => props.setNullified(!props.isNullified)}
			>
				Nullify
			</Button>
			<h3 className="placed">Grid</h3>
			<TeleopGridInfoButton/>
			<Grid gamemode="teleop"/>
			<h3 className="dock">Charge Station</h3>
			<TeleopChargeStationInfoButton/>
			<DockedTeleop/>
		</div>
	);
}


export default Teleop;
/* 3 types of game pieces: Hybrid, cube, and cone
	Teleop scores:
		bottom row: 2
		middle row: 3
		top row: 5
		Link bonus: 5
		Docked unengaged: 6
		Docked engaged: 10
		Park: 2
*/
