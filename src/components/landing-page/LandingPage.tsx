import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import './LandingPage.scss';
import { fetchEventSchedule, sendOfflineRequests, sendOfflineSuperNotesRequests } from '../../state/Effects';
import { loginSuccess } from '../../state/Actions';
import { useAppDispatch, useAppSelector } from '../../state/Hooks';
import { CURRENT_YEAR } from '../../models/models';


export default function LandingPage() {
	const dispatch = useAppDispatch();
	const numOfflineMatches: number = useAppSelector(state => state.cache.matches.length);
	const numOfflineSuperNotes: number = useAppSelector(state => state.cache.superNotes.length);
	const [teamNumber, setTeamNumber] = useState<string>('');
	const [eventCode, setEventCode] = useState<string>('');
	const [secretCode, setSecretCode] = useState<string>('');
	const [scouterName, setScouterName] = useState<string>('');
	const [tbaCode, setTbaCode] = useState<string>('');

	useEffect(() => {
		const query = new URLSearchParams(window.location.search);
		const initialTeamNumber = query.get('team');
		const initialEventCode = query.get('event');
		const initialSecretCode = query.get('secret');
		const initialTbaCode = query.get('tba');

		// set initial values from query string and clear
		if (initialTeamNumber ?? initialEventCode ?? initialSecretCode ?? initialTbaCode) {
			if (initialTeamNumber) {
				localStorage.setItem('teamNumber', initialTeamNumber);
			}
			if (initialEventCode) {
				localStorage.setItem('eventCode', initialEventCode);
			}
			if (initialSecretCode) {
				localStorage.setItem('secretCode', initialSecretCode);
			}
			if (initialTbaCode) {
				localStorage.setItem('tbaCode', initialTbaCode);
			}
			const urlPieces = [location.protocol, '//', location.host, location.pathname];
			const url = urlPieces.join('');
			window.location.replace(url);
		}

		setTeamNumber(localStorage.getItem('teamNumber') ?? '');
		setEventCode(localStorage.getItem('eventCode') ?? '');
		setSecretCode(localStorage.getItem('secretCode') ?? '');
		setScouterName(localStorage.getItem('scouterName') ?? '');
		setTbaCode(localStorage.getItem('tbaCode') ?? '');
	}, []);

	const handleSubmit = (event): void => {
		event.preventDefault();
		localStorage.setItem('teamNumber', teamNumber);
		localStorage.setItem('eventCode', eventCode);
		localStorage.setItem('secretCode', secretCode);
		localStorage.setItem('scouterName', scouterName);
		localStorage.setItem('tbaCode', tbaCode);

		dispatch(loginSuccess({
			teamNumber: teamNumber,
			eventCode: eventCode,
			secretCode: secretCode,
			scouterName: scouterName
		}));
		dispatch(fetchEventSchedule(CURRENT_YEAR, tbaCode));
	};

	const handleSendOfflineRequests = (): void => {
		dispatch(sendOfflineRequests());
		dispatch(sendOfflineSuperNotesRequests());
	};

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

			<form className="login-form">
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
				<TextField
					id="tba-code-input"
					name="tbaCode"
					label="TBA code (optional)"
					helperText="The Blue Alliance event ID"
					type="text"
					margin="dense"
					variant="filled"
					autoComplete="off"
					value={ tbaCode }
					onChange={ (event) => setTbaCode(event.target.value) }
					required={ false }
					slotProps={{
						htmlInput: {
							maxLength: 6,
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
					disabled={ numOfflineMatches === 0 && numOfflineSuperNotes === 0 }
				>
					Retry saved matches
				</Button>
			</div>
		</div>
	);
}
