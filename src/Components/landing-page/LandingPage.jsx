import React from 'react';
import Button from  '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import './LandingPage.scss';


class LandingPage extends React.Component {






render() {
    return ( /* error here */
        <div className='wrapper'>
            <div className='header'>
                <div className='left'>
                    <img src='https://placekitten.com/100/100' alt="cute cat used as a placeholder" />
                </div>
                <h1 className='Title'>2338 Gear It Forward</h1>
                <span>
                    
                    Future Language Button 
                    
                    </span> 
            </div>
        </div>
    )
}

}



export default LandingPage;