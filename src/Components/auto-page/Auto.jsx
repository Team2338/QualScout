import './Auto.scss';
import Button from '@mui/material/Button';
import React from 'react';
import Grid from '../shared/grid/Grid';
import Mobility from './Mobility';
import AutoDocked from './AutoDocked';
import AutoGridInfoButton from './AutoGridInfoButton';
import MobilityInfoButton from './MobilityInfoButton';
import AutoChargeStationInfoButton from './AutoChargeStationInfoButton';


function Auto(props) {
	return (
		<div className='background'>
			<h1 className='text'>Auto</h1>
			<div className='grid-flex'>
				<Button
					style={{ textTransform: 'capitalize' }}
					variant={props.isNullified ? 'contained' : 'outlined'}
					onClick={() => props.setNullified(!props.isNullified)}
				>
					Nullify
				</Button>
				<h3>Grid</h3>
				<AutoGridInfoButton />
				<Grid gamemode="auto"/>
			</div>
			<h3>Mobility</h3>
			<MobilityInfoButton />
			<Mobility/>
			<h3>Charge Station</h3>
			<AutoChargeStationInfoButton />
			<AutoDocked />
		</div>
	);
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
