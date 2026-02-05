import React, { useEffect, useState, FormEvent } from 'react';
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
	const [isValid, setIsValid] = useState<boolean>(false);
	const version = import.meta.env.VITE_APP_VERSION || '2026.0.1';

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

	useEffect(() => {
		const valid = Boolean(
			teamNumber.trim() &&
			scouterName.trim() &&
			eventCode.trim() &&
			secretCode.trim()
		);
		setIsValid(valid);
	}, [teamNumber, scouterName, eventCode, secretCode]);

	const handleSubmit = (event: FormEvent): void => {
		event.preventDefault();
		
		if (!isValid) {
			return;
		}

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

		if (tbaCode.trim()) {
			dispatch(fetchEventSchedule(CURRENT_YEAR, tbaCode));
		}
	};

	const handleSendOfflineRequests = (): void => {
		dispatch(sendOfflineRequests());
		dispatch(sendOfflineSuperNotesRequests());
	};

	return (
		<main className="page login-page">
			<div className="title">
				<div className="app-name">QualScout</div>
				<div className="version">v{version}</div>
			</div>
			<form className="login-form" id="login-form" aria-labelledby="login-form-header" onSubmit={handleSubmit}>
				<h1 id="login-form-header">Sign in</h1>
				
				<div className={`form-field with-prefix ${teamNumber ? 'has-value' : ''}`}>
					<input
						id="team-number-input"
						name="teamNumber"
						type="number"
						min="0"
						max="99999"
						autoComplete="off"
						required
						value={teamNumber}
						onChange={(e) => setTeamNumber(e.target.value)}
					/>
					<span className="input-prefix">#</span>
					<label htmlFor="team-number-input">Team number</label>
				</div>

				<div className={`form-field ${scouterName ? 'has-value' : ''}`}>
					<input
						id="scouter-name-input"
						name="scouterName"
						type="text"
						maxLength={32}
						autoComplete="off"
						required
						value={scouterName}
						onChange={(e) => setScouterName(e.target.value)}
					/>
					<label htmlFor="scouter-name-input">Scouter name</label>
				</div>

				<div className={`form-field ${eventCode ? 'has-value' : ''}`}>
					<input
						id="event-code-input"
						name="eventCode"
						type="text"
						maxLength={32}
						autoComplete="off"
						required
						value={eventCode}
						onChange={(e) => setEventCode(e.target.value)}
					/>
					<label htmlFor="event-code-input">Event code</label>
				</div>

				<div className={`form-field ${secretCode ? 'has-value' : ''}`}>
					<input
						id="secret-code-input"
						name="secretCode"
						type="text"
						maxLength={32}
						autoComplete="off"
						required
						value={secretCode}
						onChange={(e) => setSecretCode(e.target.value)}
					/>
					<label htmlFor="secret-code-input">Secret code</label>
				</div>

				<div className={`form-field ${tbaCode ? 'has-value' : ''}`}>
					<input
						id="tba-code-input"
						name="tbaCode"
						type="text"
						maxLength={6}
						autoComplete="off"
						value={tbaCode}
						onChange={(e) => setTbaCode(e.target.value)}
					/>
					<label htmlFor="tba-code-input">TBA code (optional)</label>
					<div className="helper-text">The Blue Alliance event ID</div>
				</div>

				<button id="login-submit-button" type="submit" disabled={!isValid}>
					Submit
				</button>
			</form>
			
			{(numOfflineMatches > 0 || numOfflineSuperNotes > 0) && (
				<div className="retry-send-button-wrapper">
					<button
						className="retry-button"
						onClick={handleSendOfflineRequests}
					>
						Retry saved matches
					</button>
				</div>
			)}
		</main>
	);
}
