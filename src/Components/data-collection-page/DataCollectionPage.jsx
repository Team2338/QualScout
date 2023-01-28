import React from 'react';
import './DataCollectionPage.scss'
import Button from '@mui/material/Button'
import MatchInfo from '../match-information/MatchInformation.jsx'
import Auto from '../auto-page/Auto.jsx';
import Teleop from'../teleop-page/Teleop.jsx'

class DataCollectionPage extends React.Component {
    
    render() {
        return (
          <div className='background'>
            <MatchInfo />
            <Auto />
            <Teleop />
            <div className='submit'>
              <Button sx={{ m: 0.5 }} variant='outlined' className='submit' href='/'>Back</Button>
              <Button sx={{ m: 0.5 }} variant='contained' className='submit'>Submit</Button>
            </div>
          </div>
        );
      }
}
export default DataCollectionPage;