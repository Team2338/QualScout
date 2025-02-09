import React, { useEffect, useState } from 'react';
import './App.scss';
import { fetchOfflineRequests } from '../state/Effects';
import { useAppDispatch } from '../state/Hooks';
import DataCollectionPage from './data-collection-page/DataCollectionPage';
import LandingPage from './landing-page/LandingPage';
import { loginSuccess } from '../state/Actions';

function App() {
	const dispatch = useAppDispatch();
	const [hasLoggedIn, setLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState({
		teamNumber: '',
		eventCode: '',
		secretCode: '',
		scouterName: ''
	});

	const setUserInfoCallback = (teamNumber, eventCode, secretCode, scouterName) => {
		dispatch(loginSuccess({
			teamNumber: teamNumber,
			eventCode: eventCode,
			secretCode: secretCode,
			scouterName: scouterName
		}));
		setUserInfo({
			teamNumber: teamNumber,
			eventCode: eventCode,
			secretCode: secretCode,
			scouterName: scouterName
		});
		setLoggedIn(true);
	};

	useEffect(
		() => {
			dispatch(fetchOfflineRequests());
		},
		[dispatch]
	);

	let component = <LandingPage parentCallback={ setUserInfoCallback } />;
	if (hasLoggedIn) {
		component = (
			<DataCollectionPage />
		);
	}

	return (
		<div className="App">
			{ component }
		</div>
	);
}

export default App;
