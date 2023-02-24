import React, { useState } from 'react';
import './App.scss';
import LandingPage from './Components/landing-page/LandingPage.jsx'
import DataCollectionPage from './Components/data-collection-page/DataCollectionPage.jsx'

function App() {
	const [userInfo, setUserInfo] = useState({
		teamNumber: '',
		eventCode: '',
		secretCode: '',
		scouterName: ''
	});

	const setUserInfoCallback = (teamNumber, evenCode, secretCode, scouterName) => {
		setUserInfo({
			teamNumber: teamNumber,
			eventCode: evenCode,
			secretCode: secretCode,
			scouterName: scouterName
		});
	};

	let component;
	switch (window.location.pathname) {
	  case '/':
			component = <LandingPage parentCallback={setUserInfoCallback}/>;
			break;
	  case '/data':
			component = <DataCollectionPage/>;
			break;
	}
  
	return (
		<div className="App">
			{ component }
		</div>
	);
}
  
export default App;
