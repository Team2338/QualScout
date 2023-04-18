import './Grid.scss';
import { Button } from '@mui/material';
import React from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';
import { activateNode } from '../../../app/Actions';

function Grid(props) {

	const dispatch = useDispatch();
	const handleClick = (index) => dispatch(activateNode(props.gamemode, index));
	const autoGrid = useSelector(state => state.auto.grid);
	const teleopGrid = useSelector(state => state.teleop.grid);
	console.log('auto')
	console.log(autoGrid);
	console.log('teleop')
	console.log(teleopGrid)
	const combinedGrid = [];

	for (let i = 0; i < teleopGrid.length; i++) {
		combinedGrid[i] = autoGrid[i] + teleopGrid[i];
	}

	const elements = combinedGrid.map((node, index) => {
		let color = '';
		let variant = '';
		if (props.gamemode === 'auto') {
			color = 'primary';
			variant = (autoGrid[index] === 0) ? 'outlined' : 'contained';
		} else {
			variant = (teleopGrid[index] === 0) ? 'outlined' : 'contained';

			if (teleopGrid[index] === 0) {
				color = 'primary';
			} else if (teleopGrid[index] === 1 && autoGrid[index] === 0) {
				color = 'primary';
			} else if (teleopGrid[index] === 1 && autoGrid[index] === 1) {
				color = 'tertiary';
			} else if (teleopGrid[index] === 2) {
				color = 'tertiary';
			}
		}

		let symbol = '▲';
		if (index > 17) {
			symbol = '▲ ■';
		} else if (index % 3 === 1) {
			symbol = '■';
		}

		return (
			<Button
				key={index}
				variant={variant}
				color={color}
				onClick={() => handleClick(index)}
			>
				{symbol}
			</Button>
		);
	});

	return (
		<div className="grid-objective">
			{elements}
		</div>
	);
}

export default Grid;
