import { Button } from '@mui/material';
import React from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';
import { setChargeStation } from '../../app/Actions.js';
import './ButtonSpacing.scss';


const ChargeStationValues = {
	auto: {
		none: 0,
		docked: 8,
		engaged: 12
	},
	teleop: {
		none: 0,
		docked: 6,
		engaged: 10
	}
};

function Docked(props) {

	const dispatch = useDispatch();
	const chargeStationValue = useSelector(state => state.auto.chargeStation);


	const getButtonStyle = (status) => {
		if (chargeStationValue === ChargeStationValues[props.gamemode][status]) {
			return 'contained';
		}

		return 'outlined';
	};

	const setValue = (status) => {
		const points = ChargeStationValues[props.gamemode][status];
		dispatch(setChargeStation(points));
	};


	return (
		<div className="spacing">
			<Button
				sx={{ m: 0.5 }}
				style={{ textTransform: 'capitalize' }}
				variant={getButtonStyle('none')}
				onClick={() => setValue('none')}
			>
				None
			</Button>
			<Button
				sx={{ m: 0.5 }}
				style={{ textTransform: 'capitalize' }}
				variant={getButtonStyle('docked')}
				onClick={() => setValue('docked')}
			>
				Docked Only
			</Button>
			<Button
				sx={{ m: 0.5 }}
				style={{ textTransform: 'capitalize' }}
				variant={getButtonStyle('engaged')}
				onClick={() => setValue('engaged')}
			>
				Docked Engaged
			</Button>
		</div>
	);
}


export default Docked;
