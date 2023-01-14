import React from 'react';
import './App.css';
import Auto from './Components/auto-page/Auto.jsx';
import LandingPage from './Components/landing-page/LandingPage.jsx'
import Teleop from'./Components/teleop-page/Teleop.jsx'

function App() {

	let Component
	switch (window.location.pathname) {
	  case "/":
		Component = LandingPage
		break
	  case "/auto":
		Component = Auto
		break
	  case "/teleop":
		Component = Teleop
		break
	}
  
	return (
		<div className="App">
		  <Component/>
		  </div>
	);
  }
  
  export default App;