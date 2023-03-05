import { Button } from '@mui/material';
import React from 'react';
import {
	useDispatch,
	useSelector
} from 'react-redux';
import { setChargeStation } from '../../app/Actions.js';

const ChargeStationValues = {
	none: 0,
	parked: 2,
	docked: 6,
	engaged: 10
};

function DockedTeleop() {

	const dispatch = useDispatch();
	const chargeStationValue = useSelector(state => state.teleop.chargeStation);

	const getButtonStyle = (status) => {
		if (chargeStationValue === ChargeStationValues[status]) {
			return 'contained';
		}

		return 'outlined';
	};

	const setValue = (status) => {
		const points = ChargeStationValues[status];
		dispatch(setChargeStation('teleop', points));
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
				variant={getButtonStyle('parked')}
				onClick={() => setValue('parked')}
			>
				Parked
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


export default DockedTeleop;
