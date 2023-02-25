import React, { useState } from 'react';
import './Auto.jsx';
import { Button } from '@mui/material';
import './ButtonSpacing.scss'


function Docked(props) {
	const [NoneVariant, SetNoneVariant] = useState('contained');
	const [UnengagedVariant, SetUnengagedVariant] = useState('outlined');
	const [EngagedVariant, SetEngagedVariant] = useState('outlined');


	const handleNoneClick = () => {
		if (NoneVariant === 'outlined') {
			SetNoneVariant('contained');
			SetUnengagedVariant('outlined');
			SetEngagedVariant('outlined');
			props.noDockAuto();
		}

	}
	const handleUnengagedClick = () => {
		if (UnengagedVariant === 'outlined') {
			SetUnengagedVariant('contained');
			SetNoneVariant('outlined');
			SetEngagedVariant('outlined');
			props.dockedAuto();
		}
	}
	const handleEngagedClick = () => {
		if (EngagedVariant === 'outlined') {
			SetEngagedVariant('contained');
			SetNoneVariant('outlined');
			SetUnengagedVariant('outlined');
			props.engagedAuto();
		}
	}



	return (
		<div className="spacing">
			<Button sx={{ m: 0.5 }} style={{textTransform: 'capitalize'}} variant={NoneVariant} onClick={handleNoneClick}>None</Button>
			<Button sx={{ m: 0.5 }} style={{textTransform: 'capitalize'}} variant={UnengagedVariant} onClick={handleUnengagedClick}>Docked Only</Button>
			<Button sx={{ m: 0.5 }} style={{textTransform: 'capitalize'}}variant={EngagedVariant} onClick={handleEngagedClick}>Docked Engaged</Button>
		</div>
	)
}



export default Docked;

