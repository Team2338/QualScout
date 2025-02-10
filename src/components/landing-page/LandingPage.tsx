import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import './LandingPage.scss';
import { sendOfflineRequests } from '../../state/Effects';
import { loginSuccess } from '../../state/Actions';
import { useAppDispatch, useAppSelector } from '../../state/Hooks';


export default function LandingPage() {
	const dispatch = useAppDispatch();
	const numOfflineMatches = useAppSelector(state => state.cache.matches.length);
	const [teamNumber, setTeamNumber] = useState<string>('');
	const [eventCode, setEventCode] = useState<string>('');
	const [secretCode, setSecretCode] = useState<string>('');
	const [scouterName, setScouterName] = useState<string>('');

	useEffect(() => {
		setTeamNumber(localStorage.getItem('teamNumber') ?? '');
		setEventCode(localStorage.getItem('eventCode') ?? '');
		setSecretCode(localStorage.getItem('secretCode') ?? '');
		setScouterName(localStorage.getItem('scouterName') ?? '');
	}, []);

	const handleSubmit = (event): void => {
		event.preventDefault();
		localStorage.setItem('teamNumber', teamNumber);
		localStorage.setItem('eventCode', eventCode);
		localStorage.setItem('secretCode', secretCode);
		localStorage.setItem('scouterName', scouterName);
		dispatch(loginSuccess({
			teamNumber: teamNumber,
			eventCode: eventCode,
			secretCode: secretCode,
			scouterName: scouterName
		}));
	};

	const handleSendOfflineRequests = (): void => {
		dispatch(sendOfflineRequests())
	}

	const isSubmitDisabled = (
		teamNumber.trim().length === 0
		|| eventCode.trim().length === 0
		|| secretCode.trim().length === 0
		|| scouterName.trim().length === 0
	);

	return (
		<div className="landing-page">
			<div className="header">
				<img
					src="2338-logo.png"
					alt="2338 logo"
					height="100"
				/>
				<div className="title-and-version">
					<h1 className="title">QualScout</h1>
					<div className="version">v{ import.meta.env.VITE_APP_VERSION }</div>
				</div>
			</div>

			<form
				className="login-form"
			>
				<h1 className="login-form-title">Sign In:</h1>
				<TextField
					id="team-number"
					name="teamNumber"
					label="Your Team Number"
					type="number"
					margin="dense"
					variant="filled"
					value={ teamNumber }
					onChange={ (event) => setTeamNumber(event.target.value) }
					slotProps={{
						input: {
							startAdornment: <InputAdornment position="start">#</InputAdornment>
						},
						htmlInput: {
							min: 0,
							max: 10999
						}
					}}
				/>
				<TextField
					id="event-code"
					name="eventCode"
					label="Event Code"
					type="text"
					margin="dense"
					variant="filled"
					value={ eventCode }
					onChange={ (event) => setEventCode(event.target.value) }
					slotProps={{
						htmlInput: {
							maxLength: 32
						}
					}}
				/>
				<TextField
					id="scouter-name"
					name="scouterName"
					label="Scouter Name"
					type="text"
					margin="dense"
					variant="filled"
					value={ scouterName }
					onChange={ (event) => setScouterName(event.target.value) }
					slotProps={{
						htmlInput: {
							maxLength: 32
						}
					}}
				/>
				<TextField
					id="secret-code"
					name="secretCode"
					label="Secret Code"
					type="text"
					margin="dense"
					variant="filled"
					value={ secretCode }
					onChange={ (event) => setSecretCode(event.target.value) }
					slotProps={{
						htmlInput: {
							maxLength: 32
						}
					}}
				/>
				<ul className="directions-area">
					<span className="note">Note:</span>
					<li className="direction">Enter a team-specific "secret code" to store data</li>
					<li className="direction">This code will be needed to view your data in the analytics app</li>
					<li className="direction">All scouters from the same team should use the same code</li>
				</ul>
				<Button
					id="submit-button"
					variant="contained"
					type="submit"
					size="medium"
					onClick={ handleSubmit }
					disabled={ isSubmitDisabled }
				>
					Submit
				</Button>
			</form>
			<div className="retry-send-button-wrapper">
				<Button
					variant="contained"
					size="medium"
					color="primary"
					onClick={ handleSendOfflineRequests }
					disabled={ numOfflineMatches === 0 }
				>
					Retry saved matches
				</Button>
			</div>
		</div>
	);
}
