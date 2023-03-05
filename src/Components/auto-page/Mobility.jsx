import React from 'react';
import { Button } from '@mui/material';
import './ButtonSpacing.scss';
import {
	useDispatch,
	useSelector
} from 'react-redux';
import { setAutoPark } from '../../app/Actions.js';


function Mobility() {

	const dispatch = useDispatch();
	const parkValue = useSelector(state => state.auto.park);

	const handleYesClick = () => {
		dispatch(setAutoPark(3));
	};

	const handleNoClick = () => {
		dispatch(setAutoPark(0));
	};


	return (
		<div className="spacing">
			<Button
				sx={{ m: 0.5 }}
				style={{ textTransform: 'capitalize' }}
				variant={(parkValue === 0) ? 'contained' : 'outlined'}
				onClick={handleNoClick}
			>
				No
			</Button>
			<Button
				sx={{ m: 0.5 }}
				style={{ textTransform: 'capitalize' }}
				variant={(parkValue === 3) ? 'contained' : 'outlined'}
				onClick={handleYesClick}
			>
				Yes
			</Button>
		</div>
	);
}


export default Mobility;
