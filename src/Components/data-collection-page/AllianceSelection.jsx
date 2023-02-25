import React from 'react';
import { Button } from '@mui/material'
import { useState } from 'react';






function AllianceSelection() {

    const [red, setRed] = useState('outlined');
    const [blue, setBlue] = useState('outlined');
    const [redColor, setRedColor] = useState('#01233d')
    const [blueColor, setBlueColor] = useState('#01233d')


    const handleRedClick = () => {
        if(red==='outlined') {
            setRed('contained')
            setBlue('outlined')
            setRedColor('#ee4444')
            setBlueColor('#01233d')
        }

    }
    const handleBlueClick = () => {
        if(blue==='outlined') {
            setBlue('contained')
            setRed('outlined');
            setBlueColor('#5577ff')
            setRedColor('#01233d')
        }
    }


    return (
		<div className='spacing'>
			<Button sx={{ m: 0.5 }} style={{backgroundColor: redColor, margin: 5, textTransform: 'capitalize'}}variant={red} onClick={handleRedClick}>Red Alliance</Button>
			<Button sx={{ m: 0.5 }} style={{backgroundColor: blueColor, margin: 5, textTransform: 'capitalize'}} variant={blue} onClick={handleBlueClick}>Blue Alliance</Button>
		</div>
	);


    
}





export default AllianceSelection;