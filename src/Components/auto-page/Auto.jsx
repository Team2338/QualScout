import './Auto.scss';
import React from 'react';
import Grid from '../shared/grid/Grid.jsx';
import Nullify from './Nullify';
import Mobility from './Mobility';
import Docked from './Docked';
import AutoGridInfoButton from './AutoGridInfoButton';
import MobilityInfoButton from './MobilityInfoButton';
import AutoChargeStationInfoButton from './AutoChargeStationInfoButton';


class Auto extends React.Component {
	render() {
		return(
			<div className='background'>
				<h1 className='text'>Auto</h1>
				<div className='grid-flex'>
					<Nullify />
					<h3>Grid</h3>
					<AutoGridInfoButton />
					<Grid gamemode="auto"/>
				</div>
				<h3>Mobility</h3>
				<MobilityInfoButton />
				<Mobility/>
				<h3>Charge Station</h3>
				<AutoChargeStationInfoButton />
				<Docked gamemode="auto"/>
			</div>
		)
	}

}

export default Auto;

/*
	Points for auto is as follows:
	Mobile: 3
	bottom row: 3
	middle row: 4
	top row: 6
	Docked not engaged: 8 (1 robot max)
	Docked Engaged: 12 (1 robot max)
*/
