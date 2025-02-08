import './AllianceSelector.scss';
import { Button } from '@mui/material';
import React from 'react';
import { AllianceColor } from '../../../models/models';

interface IProps {
	selected: string;
	selectAlliance: (color: string) => void;
}

function AllianceSelector(props: IProps) {
	let blueColor = '#01233D';
	let redColor = '#01233D';

	if (props.selected === AllianceColor.red) {
		redColor = '#EE4444';
	} else if (props.selected === AllianceColor.blue) {
		blueColor = '#5577FF';
	}

	return (
		<div className="alliance-selector">
			<Button
				id="red-alliance-button"
				style={{ backgroundColor: redColor }}
				variant={ props.selected === AllianceColor.red ? 'contained' : 'outlined' }
				onClick={ () => props.selectAlliance(AllianceColor.red) }
			>
				Red Alliance
			</Button>
			<Button
				id="blue-alliance-button"
				style={{ backgroundColor: blueColor }}
				variant={ props.selected === AllianceColor.blue ? 'contained' : 'outlined' }
				onClick={ () => props.selectAlliance(AllianceColor.blue) }
			>
				Blue Alliance
			</Button>
		</div>
	);
}

export default AllianceSelector;
