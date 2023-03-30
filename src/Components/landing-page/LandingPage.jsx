import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import './LandingPage.scss';


class LandingPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			teamNumber: '',
			eventCode: '',
			secretCode: '',
			scouterName: '',
		};
	}

	handleClick = (event) => {
		event.preventDefault();
		localStorage.setItem('teamNumber', this.state.teamNumber.toString());
		localStorage.setItem('eventCode', this.state.eventCode.toString());
		localStorage.setItem('secretCode', this.state.secretCode.toString());
		localStorage.setItem('scouterName', this.state.scouterName.toString());
		this.props.parentCallback(this.state.teamNumber, this.state.eventCode, this.state.secretCode, this.state.scouterName);
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	componentDidMount() {
		const teamNumber = localStorage.getItem('teamNumber') ?? '';
		const eventCode = localStorage.getItem('eventCode') ?? '';
		const secretCode = localStorage.getItem('secretCode') ?? '';
		const scouterName = localStorage.getItem('scouterName') ?? '';

		this.setState(({
			teamNumber: teamNumber,
			eventCode: eventCode,
			secretCode: secretCode,
			scouterName: scouterName,
		}));
	}

	isSubmitDisabled = () => {
		return (
			this.state.teamNumber.length === 0
			|| this.state.eventCode.length === 0
			|| this.state.scouterName.length === 0
			|| this.state.secretCode.length === 0
		);
	}

	render() {
		return (
			<div className="wrapper">
				<div className="header">
					<div className="left">
						<a href="https://twitter.com/FIRST2338">
							<img src="2338-logo.png" alt="2338 logo" height="100rem"/>
						</a>
					</div>
					<h1 className="Title">GearScout</h1>
				</div>

				<h1 className="login-title">Sign In:</h1>
				<div className="landingpage-forms">
					<TextField
						name="teamNumber"
						id="outlined-basic"
						label="Your Team Number"
						variant="filled"
						type="number"
						onChange={this.handleChange}
						value={this.state.teamNumber}
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
						id="outlined-basic"
						label="Event Code"
						variant="filled"
						type="text"
						onChange={this.handleChange}
						value={this.state.eventCode}
						placeholder="Event Code"
						inputProps={{
							maxLength: 32
						}}
					/>
				</div>

				<div className="landingpage-forms">
					<TextField
						name="scouterName"
						id="outlined-basic"
						label="Scouter Name"
						variant="filled"
						type="text"
						onChange={this.handleChange}
						value={this.state.scouterName}
						placeholder="Scouter Name"
						inputProps={{
							maxLength: 32
						}}
					/>
				</div>
				<div className="landingpage-forms">
					<TextField
						name="secretCode"
						id="outlined-basic"
						label="Secret Code"
						variant="filled"
						type="text"
						onChange={this.handleChange}
						value={this.state.secretCode}
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
					onClick={this.handleClick}
					disabled={this.isSubmitDisabled()}
				>
					Submit
				</Button>
			</div>
		);
	}
}

export default LandingPage;
