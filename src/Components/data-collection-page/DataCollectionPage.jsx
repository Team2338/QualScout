import React from 'react';
import Auto from '../auto-page/Auto.jsx';
import Teleop from'../teleop-page/Teleop.jsx'

class DataCollectionPage extends React.Component {
    
    render() {
        return (
          <div>
            <Auto />
            <Teleop />
          </div>
        );
      }
}
export default DataCollectionPage;