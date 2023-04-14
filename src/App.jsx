import React, {
	useEffect,
	useState
} from 'react';
import './App.scss';
import { fetchOfflineRequests } from './app/Effects';
import { useAppDispatch } from './app/Hooks';
import DataCollectionPage from './Components/data-collection-page/DataCollectionPage';
import LandingPage from './Components/landing-page/LandingPage';

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
	)

	let component = <LandingPage parentCallback={setUserInfoCallback}/>;
	if (hasLoggedIn) {
		component = (
			<DataCollectionPage
				teamNumber={userInfo.teamNumber}
				eventCode={userInfo.eventCode}
				secretCode={userInfo.secretCode}
				scouterName={userInfo.scouterName}
			/>
		);
	}

	return (
		<div className="App">
			{component}
		</div>
	);
}

export default App;
