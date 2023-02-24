import React, { useState } from 'react';
import './App.scss';
import LandingPage from './Components/landing-page/LandingPage.jsx'
import DataCollectionPage from './Components/data-collection-page/DataCollectionPage.jsx'

function App() {
	const [hasLoggedIn, setLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState({
		teamNumber: '',
		eventCode: '',
		secretCode: '',
		scouterName: ''
	});

	const setUserInfoCallback = (teamNumber, eventCode, secretCode, scouterName) => {
		console.log('team number', teamNumber)
		setUserInfo({
			teamNumber: teamNumber,
			eventCode: eventCode,
			secretCode: secretCode,
			scouterName: scouterName
		});
		setLoggedIn(true);
	};

	let component = <LandingPage parentCallback={setUserInfoCallback}/>;
	if (hasLoggedIn){
		component = <DataCollectionPage
			teamNumber={userInfo.teamNumber}
			eventCode={userInfo.eventCode}
			secretCode={userInfo.secretCode}
			scouterName={userInfo.scouterName}
			teamColor={'RED'}
		/>;
	}

	return (
		<div className="App">
			{ component }
		</div>
	);
}
  
export default App;
