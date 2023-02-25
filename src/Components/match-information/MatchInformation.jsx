import './MatchInformation.scss'
import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function MatchInformation(props) {
	const [variant, setVariant] = useState("outlined");
	
	const handleNullifyClick = () => {
		if (variant === 'outlined') {
			setVariant('contained');
			props.nullify();
		} else {
			setVariant('outlined');
			props.nullify();
		}
	}

	return(
		<div className='wrap'>
			<div className='logo'>
				<img src='2338-logo.png' alt="2338 logo" height='100rem' />
			</div>
			<div className='textboxes'>
				<TextField
					label="Team Number"
					variant="standard"
					sx={{"& .MuiFormLabel-root": {color: 'primary.main'}, m: 0.5}}
					value={props.scoutingTeamNumber}
					onChange={(event) => props.setScoutingTeamNumber(event.target.value)}
					placeholder="Team Number"
				/>
				<TextField
					label="Match Number"
					variant="standard"
					sx={{"& .MuiFormLabel-root": {color: 'primary.main'}, m: 0.5}}
					value={props.matchNumber}
					onChange={(event) => props.setMatchNumber(event.target.value)}
					placeholder="Match Number"
				/>
			</div>
			<div className='analytics'>
				<Button sx={{ m: 0.5 }} variant='contained' href='https://data.gearitforward.com/'>Analytics</Button>
				<Button sx={{ m: 0.5 }} variant={variant} onClick={handleNullifyClick}>Nullify</Button>
			</div>
		</div>
	);
}

export default MatchInformation;
