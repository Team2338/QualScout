import React from 'react';
import Grid from '../shared/grid/Grid.jsx';
import Nullify from './Nullify.jsx';
import './Teleop.scss';
import DockedTeleop from './DockedTeleop';
import TeleopGridInfoButton from './TeleopGridInfoButton';
import TeleopChargeStationInfoButton from './TeleopChargeStationInfoButton';


function Teleop() {
	return (
		<div className="background">
			<h1 className="text">Teleop</h1>
			<div className="gridflex">
				<Nullify/>
			</div>
			<h3 className="placed">Grid</h3>
			<TeleopGridInfoButton/>
			<Grid gamemode="teleop"/>
			<h3 className="dock">Charge Station</h3>
			<TeleopChargeStationInfoButton/>
			<DockedTeleop />
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
