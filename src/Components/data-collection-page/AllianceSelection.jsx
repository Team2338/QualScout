import { Button } from '@mui/material';
import React, { useState } from 'react';

function AllianceSelection(props) {

	const [redColor, setRedColor] = useState('#01233D');
	const [blueColor, setBlueColor] = useState('#01233D');

	const handleRedClick = () => {
		if (props.selected === 'BLUE') {
			setRedColor('#EE4444');
			setBlueColor('#01233D');
			props.selectAlliance('RED');
		}
	};

	const handleBlueClick = () => {
		if (props.selected === 'RED') {
			setBlueColor('#5577FF');
			setRedColor('#01233D');
			props.selectAlliance('BLUE');
		}
	};


	return (
		<div className="spacing">
			<Button
				sx={{ m: 0.5 }}
				style={{ backgroundColor: redColor, margin: 5, textTransform: 'capitalize' }}
				variant={props.selected === 'RED' ? 'contained' : 'outlined'}
				onClick={handleRedClick}
			>
				Red Alliance
			</Button>
			<Button
				sx={{ m: 0.5 }}
				style={{ backgroundColor: blueColor, margin: 5, textTransform: 'capitalize' }}
				variant={props.selected === 'BLUE' ? 'contained' : 'outlined'}
				onClick={handleBlueClick}
			>
				Blue Alliance
			</Button>
		</div>
	);
}

export default AllianceSelection;
