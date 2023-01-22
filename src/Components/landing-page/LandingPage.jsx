import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import Select from '@mui/material/Select';

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
        localStorage.setItem('teamNumber', this.state.teamNumber.toString());
        localStorage.setItem('eventCode', this.state.eventCode.toString());
        localStorage.setItem('secretCode', this.state.secretCode.toString());
        localStorage.setItem('scouterName', this.state.scouterName.toString());
        this.props.parentCallback(event, this.state.teamNumber, this.state.eventCode, this.state.secretCode, this.state.scouterName);
    };

    handleChange = (event) => {
        console.log(event);
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
            scouterName: scouterName
        }))
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='header'>
                    <div className='left'>
                        <img src='https://placekitten.com/100/100' alt="cute cat used as a placeholder" />
                    </div>
                    <h1 className='Title'>2338 Gear It Forward</h1>
                    <span>
                        <Select>
                        </Select>
                    </span> 
                </div>

                <h1 className="login-title">SIGN IN: </h1>
                <div className="landingpage-forms">
                    <TextField
                        name="teamNumber"
                        id="outlined-basic"
                        label="YOUR TEAM NUMBER"
                        variant="filled"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.teamNumber}
                        InputProp={{
                            startAdorment: <InputAdornment position="start">#</InputAdornment>
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
                                label="EVENT CODE"
                                variant="filled"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.eventCode}
                                placeholder="EVENT CODE"
                                inputProps={{
                                    maxlength: 32
                                }}
                        />
                </div>
                
                <div className="landingpage-forms">
                        <TextField
                                name="scouterName"
                                id="outlined-basic"
                                label="SCOUTER NAME"
                                variant="filled"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.scouterName}
                                placeholder="SCOUTER NAME"
                                inputProps={{
                                    maxLength: 32
                                }}
                        />
                </div>
                <div className="landingpage-forms">
                        <TextField
                                name="secretCode"
                                id="outlined-basic"
                                label="SECRET CODE"
                                variant="filled"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.secretCode}
                                placeholder="SCOUTER NAME"
                                inputProps={{
                                    maxLength: 32
                                }}
                        />
                            </div>

                <div className="points-landingpage">*"SECRET CODE HELPER 1"*</div>
                <div className="points-landingpage">*"SECRET CODE HELPER 2"*</div>
                <div className="points-landingpage">*"SECRET CODE HELPER 3"*</div>

                <Button
                        name="red"
                        className="button"
                        type="button"
                        variant="contained"
                        size="medium"
                        onClick={this.handleClick}
                    >
                        "RED ALLIANCE"
                    </Button>
                <Button
                        name="blue"
                        className="button"
                        type="button"
                        variant="contained"
                        size="medium"
                        onClick={this.handleClick}
                    >
                        "BLUE ALLIANCE"
                    </Button>
                    <Button
                        name="submit"
                        className="button"
                        type="button"
                        variant="contained"
                        size="medium"
                        onClick={this.handleClick}
                        href='/data'
                    >
                        "SUBMIT 1"
                    </Button>
            </div>        
        )
    }

}
export default LandingPage;