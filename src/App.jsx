import React from 'react';
import './App.scss';
import LandingPage from './Components/landing-page/LandingPage.jsx'
import DataCollectionPage from './Components/data-collection-page/DataCollectionPage.jsx'

function App() {
	let Component
	switch (window.location.pathname) {
	  case "/":
		Component = LandingPage
		break
	  case "/data":
		Component = DataCollectionPage
		break
	}
  
	return (

		<div className="App">
		  <Component/>
		</div>
	);
  }
  
  export default App;