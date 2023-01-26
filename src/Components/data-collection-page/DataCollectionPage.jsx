import React from 'react';
import Button from '@mui/material/Button'
import MatchInfo from '../match-information/MatchInformation.jsx'
import Auto from '../auto-page/Auto.jsx';
import Teleop from'../teleop-page/Teleop.jsx'

class DataCollectionPage extends React.Component {
    
    render() {
        return (
          <div>
            <MatchInfo />
            <Auto />
            <Teleop />
            <Button variant='contained' href='/'>Back</Button>
          </div>
        );
      }
}
export default DataCollectionPage;