import './App.scss';
import React, { useEffect } from 'react';
import { fetchOfflineRequests, fetchOfflineSuperNotes } from '../state/Effects';
import { useAppDispatch, useAppSelector } from '../state/Hooks';
import { IUser } from '../models/models';
import DataCollectionPage from './data-collection-page/DataCollectionPage';
import LandingPage from './landing-page/LandingPage';

export default function App() {
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
			<UpdateBanner />
			{ component }
		</div>
	);
}

function UpdateBanner() {
	const appHasUpdateAvailable: boolean = useAppSelector(state => state.serviceWorker.updated);
	const serviceWorker: ServiceWorker = useAppSelector(state => state.serviceWorker.sw);

	return appHasUpdateAvailable && (
		<div className="update-available-banner">
			<span>An update is available!</span>
			<button
				className="update-button"
				onClick={ () => {
					serviceWorker.postMessage('SKIP_WAITING');
				}}
			>
				Update
			</button>
		</div>
	);
}
