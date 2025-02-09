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
		<div className="wrapper">
			<div className="header">
				<div className="logo-wrapper">
					<a href="https://twitter.com/FIRST2338">
						<img src="2338-logo.png" alt="2338 logo" height="100rem"/>
					</a>
				</div>
				<div className="title-and-version">
					<h1 className="title">QualScout</h1>
					<div className="version">v{ import.meta.env.VITE_APP_VERSION }</div>
				</div>
			</div>

			<h1 className="login-title">Sign In:</h1>
			<div className="landingpage-forms">
				<TextField
					name="teamNumber"
					id="team-number"
					label="Your Team Number"
					variant="filled"
					type="number"
					onChange={ (event) => setTeamNumber(event.target.value) }
					value={ teamNumber }
					InputProps={{
						startAdornment: <InputAdornment position="start">#</InputAdornment>
					}}
					inputProps={{
						min: 0,
						max: 9999
					}}
				/>
			</div>

			<div className="landingpage-forms">
				<TextField
					name="eventCode"
					id="event-code"
					label="Event Code"
					variant="filled"
					type="text"
					onChange={ (event) => setEventCode(event.target.value) }
					value={ eventCode }
					placeholder="Event Code"
					inputProps={{
						maxLength: 32
					}}
				/>
			</div>

			<div className="landingpage-forms">
				<TextField
					name="scouterName"
					id="scouter-name"
					label="Scouter Name"
					variant="filled"
					type="text"
					onChange={ (event) => setScouterName(event.target.value) }
					value={ scouterName }
					placeholder="Scouter Name"
					inputProps={{
						maxLength: 32
					}}
				/>
			</div>
			<div className="landingpage-forms">
				<TextField
					name="secretCode"
					id="secret-code"
					label="Secret Code"
					variant="filled"
					type="text"
					onChange={ (event) => setSecretCode(event.target.value) }
					value={ secretCode }
					placeholder="Secret Code"
					inputProps={{
						maxLength: 32
					}}
				/>
			</div>

			<div className="points-landingpage">*Enter team specific password to store data*</div>
			<div className="points-landingpage">*This code will be used to view your analytics*</div>
			<div className="points-landingpage">*Make sure all scouters from the same team use the same code*</div>
			<Button
				name="submit"
				className="button"
				type="button"
				variant="contained"
				size="medium"
				onClick={ handleSubmit }
				disabled={ isSubmitDisabled }
			>
				Submit
			</Button>
			<Button
				variant="contained"
				size="medium"
				color="primary"
				onClick={ handleSendOfflineRequests }
				disabled={ numOfflineMatches === 0 }
				sx={{
					marginTop: 'auto',
					marginBottom: '24px'
				}}
			>
				Retry saved matches
			</Button>
		</div>
	);
}
