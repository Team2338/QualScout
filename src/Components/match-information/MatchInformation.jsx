import './MatchInformation.scss'
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/TextField';


class MatchInformation extends React.Component { 
    render() {
        return(
            <div className='wrap'>
				<div className='logo'>
				<img src='2338-logo.png' alt="2338 logo" height='100rem' />
				</div>
				<div className='textboxes'>
					<TextField
						// id="robot-number-input"
						label="Team Number"
						variant="standard"
						sx={{"& .MuiFormLabel-root": {color: 'primary.main'}, m: 0.5}}
						// sx={{"& .MuiFormLabel-root": {color: 'secondary.main'}}}
						// name="scoutingTeamNumber"
						// type="number"
						// value={this.state.scoutingTeamNumber}
						// onChange={this.handleTextBox}
						placeholder="Team Number"
						// className="data_form"
						// InputProps={{
						// 	startAdornment: <InputAdornment position="start">#</InputAdornment>
						// }}
						// inputProps={{
						// 	min: 0,
						// 	max: 9999
						// }}
					/>
					<TextField
						// id="match-number-input"
						label="Match Number"
						variant="standard"
						sx={{"& .MuiFormLabel-root": {color: 'primary.main'}, m: 0.5}}
						// sx={{"& .MuiFormLabel-root": {color: 'secondary.main'}}}
						// name="matchNumber"
						// type="number"
						// value={this.state.matchNumber}
						// onChange={this.handleTextBox}
						placeholder="Match Number"
						// className="data_form"
						// InputProps={{
							// startAdornment: <InputAdornment position="start">#</InputAdornment>
						// }}
						// inputProps={{
							// min: 0,
							// max: 999,
							// maxLength: 3
						// }}
					/>
				</div>
				<div className='analytics'>
					<Button sx={{ m: 0.5 }} variant='contained' href='https://data.gearitforward.com/'>Analytics</Button>
					<Button sx={{ m: 0.5 }} variant='contained'>Nullify</Button>
				</div>
            </div>
        )
    }
   
}



export default MatchInformation;