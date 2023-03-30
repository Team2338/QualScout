import { Button } from '@mui/material';
import React from 'react';

function AllianceSelection(props) {

	const handleRedClick = () => {
		props.selectAlliance('RED');
	};

	const handleBlueClick = () => {
		props.selectAlliance('BLUE');
	};

	let blueColor = '#01233D';
	let redColor = '#01233D';

	if (props.selected === 'RED') {
		redColor = '#EE4444';
	}
	else if (props.selected === 'BLUE') {
		blueColor = '#5577FF';
	}


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
