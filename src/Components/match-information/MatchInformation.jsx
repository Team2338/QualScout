import './MatchInformation.scss'
import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/TextField';


class MatchInformation extends React.Component { 
    render() {
        return(
            <div className='wrap'>
				<img src='2338-logo.png' alt="2338 logo" height='100rem' />
				<div className='textboxes'>
					<TextField
						// id="robot-number-input"
						label="Team Number"
						variant="standard"
						sx={{"& .MuiFormLabel-root": {color: 'primary.main'}}}
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
						sx={{"& .MuiFormLabel-root": {color: 'primary.main'}}}
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
				<div>
					<Button variant='contained' href='https://data.gearitforward.com/'>Analytics</Button>
					<Button variant='contained'>Nullify Data</Button>
				</div>
            </div>
        )
    }
   
}



export default MatchInformation;