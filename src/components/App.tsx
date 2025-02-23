import './App.scss';
import React, { useEffect } from 'react';
import { fetchOfflineRequests, fetchOfflineSuperNotes } from '../state/Effects';
import { useAppDispatch, useAppSelector } from '../state/Hooks';
import { IUser } from '../models/models';
import DataCollectionPage from './data-collection-page/DataCollectionPage';
import LandingPage from './landing-page/LandingPage';

function App() {
	const dispatch = useAppDispatch();
	const user: IUser = useAppSelector(state => state.user);
	const hasLoggedIn: boolean = !!user;

	useEffect(
		() => {
			dispatch(fetchOfflineRequests());
			dispatch(fetchOfflineSuperNotes());
		},
		[dispatch]
	);

	let component = <LandingPage />;
	if (hasLoggedIn) {
		component = <DataCollectionPage />;
	}

	return (
		<div className="App">
			{ component }
		</div>
	);
}

export default App;
