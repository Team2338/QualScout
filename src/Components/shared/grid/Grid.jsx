import './Grid.scss';
import { Button } from '@mui/material';
import React from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';
import { activateNode, deactivateNode } from '../../../app/Actions';

function Grid(props) {

	const dispatch = useDispatch();
	const addNode = (index) => dispatch(activateNode(props.gamemode, index));
	const removeNode = (index) => dispatch(deactivateNode(index));
	const grid = useSelector(state => state[props.gamemode].grid);

	const elements = grid.map((node, index) => {
		const handleClick = (node.value === 0) ? addNode : removeNode;
		const variant = (node.value === 0) ? 'outlined' : 'contained';
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
				onClick={() => handleClick(index)}
				disabled={node.disabled}
			>
				{ symbol }
			</Button>
		)
	});

	return (
		<div className="grid-objective">
			{ elements }
		</div>
	);
}

export default Grid;
