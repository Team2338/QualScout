import React, { useState } from 'react';
import Button from '@mui/material/Button';


function MatchInformation(props) {
	const [variant, setVariant] = useState('outlined');

	const handleNullifyClick = () => {
		if (variant === 'outlined') {
			setVariant('contained');
			props.nullify();
		} else {
			setVariant('outlined');
			props.nullify();
		}
	};

	return (
		<div className="wrap">
			<Button style={{ textTransform: 'capitalize' }} variant={variant} onClick={handleNullifyClick}>Nullify</Button>
		</div>
	);
}

export default MatchInformation;
