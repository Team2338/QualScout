import React from 'react';
import './Teleop.scss';
import CombinedButtons from './CombinedButtons';
import DockedTeleop from './DockedTeleop';


class Teleop extends React.Component {
	render() {
		return (
			<div className='background'>
				<h1 className='text'>Teleop</h1>
				<h3 className='placed'>Grid</h3>
				<CombinedButtons
					gridA1Teleop={this.props.gridA1Teleop}
					gridA2Teleop={this.props.gridA2Teleop}
					gridA3Teleop={this.props.gridA3Teleop}
					gridA4Teleop={this.props.gridA4Teleop}
					gridA5Teleop={this.props.gridA5Teleop}
					gridA6Teleop={this.props.gridA6Teleop}
					gridA7Teleop={this.props.gridA7Teleop}
					gridA8Teleop={this.props.gridA8Teleop}
					gridA9Teleop={this.props.gridA9Teleop}
					gridB1Teleop={this.props.gridB1Teleop}
					gridB2Teleop={this.props.gridB2Teleop}
					gridB3Teleop={this.props.gridB3Teleop}
					gridB4Teleop={this.props.gridB4Teleop}
					gridB5Teleop={this.props.gridB5Teleop}
					gridB6Teleop={this.props.gridB6Teleop}
					gridB7Teleop={this.props.gridB7Teleop}
					gridB8Teleop={this.props.gridB8Teleop}
					gridB9Teleop={this.props.gridB9Teleop}
					gridC1Teleop={this.props.gridC1Teleop}
					gridC2Teleop={this.props.gridC2Teleop}
					gridC3Teleop={this.props.gridC3Teleop}
					gridC4Teleop={this.props.gridC4Teleop}
					gridC5Teleop={this.props.gridC5Teleop}
					gridC6Teleop={this.props.gridC6Teleop}
					gridC7Teleop={this.props.gridC7Teleop}
					gridC8Teleop={this.props.gridC8Teleop}
					gridC9Teleop={this.props.gridC9Teleop}
					removeGridA1Teleop={this.props.removeGridA1Teleop}
					removeGridA2Teleop={this.props.removeGridA2Teleop}
					removeGridA3Teleop={this.props.removeGridA3Teleop}
					removeGridA4Teleop={this.props.removeGridA4Teleop}
					removeGridA5Teleop={this.props.removeGridA5Teleop}
					removeGridA6Teleop={this.props.removeGridA6Teleop}
					removeGridA7Teleop={this.props.removeGridA7Teleop}
					removeGridA8Teleop={this.props.removeGridA8Teleop}
					removeGridA9Teleop={this.props.removeGridA9Teleop}
					removeGridB1Teleop={this.props.removeGridB1Teleop}
					removeGridB2Teleop={this.props.removeGridB2Teleop}
					removeGridB3Teleop={this.props.removeGridB3Teleop}
					removeGridB4Teleop={this.props.removeGridB4Teleop}
					removeGridB5Teleop={this.props.removeGridB5Teleop}
					removeGridB6Teleop={this.props.removeGridB6Teleop}
					removeGridB7Teleop={this.props.removeGridB7Teleop}
					removeGridB8Teleop={this.props.removeGridB8Teleop}
					removeGridB9Teleop={this.props.removeGridB9Teleop}
					removeGridC1Teleop={this.props.removeGridC1Teleop}
					removeGridC2Teleop={this.props.removeGridC2Teleop}
					removeGridC3Teleop={this.props.removeGridC3Teleop}
					removeGridC4Teleop={this.props.removeGridC4Teleop}
					removeGridC5Teleop={this.props.removeGridC5Teleop}
					removeGridC6Teleop={this.props.removeGridC6Teleop}
					removeGridC7Teleop={this.props.removeGridC7Teleop}
					removeGridC8Teleop={this.props.removeGridC8Teleop}
					removeGridC9Teleop={this.props.removeGridC9Teleop}
					addPieceTopTeleop={this.props.addPieceTopTeleop}
					removePieceTopTeleop={this.props.removePieceTopTeleop}
					addPieceMiddleTeleop={this.props.addPieceMiddleTeleop}
					removePieceMiddleTeleop={this.props.removePieceMiddleTeleop}
					addPieceBottomTeleop={this.props.addPieceBottomTeleop}
					removePieceBottomTeleop={this.props.removePieceBottomTeleop}
				/>
				<h3 className='dock'>Charge Station</h3>
				<DockedTeleop
					noDockTeleop={this.props.noDockTeleop}
					parkedTeleop={this.props.parkedTeleop}
					dockedTeleop={this.props.dockedTeleop}
					engagedTeleop={this.props.engagedTeleop}
				/>
			</div>
		)
	}
}



export default Teleop;
/* 3 types of game pieces: Hybrid, cube, and cone
				 Teleop scores:
				 bottom row: 2
				 middle row: 3
				 top row: 5
				 Link bonus: 5
				 Docked unengaged: 6
				 Docked engaged: 10
				 Park: 2

			*/
