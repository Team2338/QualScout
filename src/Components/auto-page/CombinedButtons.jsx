import React from 'react';
import './CombinedButtons.scss';
import ButtonChangeA1 from './button-change/ButtonChangeA1';
import ButtonChangeA2 from './button-change/ButtonChangeA2';
import ButtonChangeA3 from './button-change/ButtonChangeA3';
import ButtonChangeA4 from './button-change/ButtonChangeA4';
import ButtonChangeA5 from './button-change/ButtonChangeA5';
import ButtonChangeA6 from './button-change/ButtonChangeA6';
import ButtonChangeA7 from './button-change/ButtonChangeA7';
import ButtonChangeA8 from './button-change/ButtonChangeA8';
import ButtonChangeA9 from './button-change/ButtonChangeA9';
import ButtonChangeB1 from './button-change/ButtonChangeB1';
import ButtonChangeB2 from './button-change/ButtonChangeB2';
import ButtonChangeB3 from './button-change/ButtonChangeB3';
import ButtonChangeB4 from './button-change/ButtonChangeB4';
import ButtonChangeB5 from './button-change/ButtonChangeB5';
import ButtonChangeB6 from './button-change/ButtonChangeB6';
import ButtonChangeB7 from './button-change/ButtonChangeB7';
import ButtonChangeB8 from './button-change/ButtonChangeB8';
import ButtonChangeB9 from './button-change/ButtonChangeB9';
import ButtonChangeC1 from './button-change/ButtonChangeC1';
import ButtonChangeC2 from './button-change/ButtonChangeC2';
import ButtonChangeC3 from './button-change/ButtonChangeC3';
import ButtonChangeC4 from './button-change/ButtonChangeC4';
import ButtonChangeC5 from './button-change/ButtonChangeC5';
import ButtonChangeC6 from './button-change/ButtonChangeC6';
import ButtonChangeC7 from './button-change/ButtonChangeC7';
import ButtonChangeC8 from './button-change/ButtonChangeC8';
import ButtonChangeC9 from './button-change/ButtonChangeC9';



function CombinedButtons(props) {
	return (
		<div className='flex'>
			<div className='grid'>
				<ButtonChangeA1 id={1} addPieceTopAuto={props.addPieceTopAuto} removePieceTopAuto={props.removePieceTopAuto} gridA1Auto={props.gridA1Auto} removeGridA1Auto={props.removeGridA1Auto} />
				<ButtonChangeA2 id={2} addPieceTopAuto={props.addPieceTopAuto} removePieceTopAuto={props.removePieceTopAuto} gridA2Auto={props.gridA2Auto} removeGridA2Auto={props.removeGridA2Auto} />
				<ButtonChangeA3 id={3} addPieceTopAuto={props.addPieceTopAuto} removePieceTopAuto={props.removePieceTopAuto} gridA3Auto={props.gridA3Auto} removeGridA3Auto={props.removeGridA3Auto} />
				<ButtonChangeA4 id={4} addPieceTopAuto={props.addPieceTopAuto} removePieceTopAuto={props.removePieceTopAuto} gridA4Auto={props.gridA4Auto} removeGridA4Auto={props.removeGridA4Auto} />
				<ButtonChangeA5 id={5} addPieceTopAuto={props.addPieceTopAuto} removePieceTopAuto={props.removePieceTopAuto} gridA5Auto={props.gridA5Auto} removeGridA5Auto={props.removeGridA5Auto} />
				<ButtonChangeA6 id={6} addPieceTopAuto={props.addPieceTopAuto} removePieceTopAuto={props.removePieceTopAuto} gridA6Auto={props.gridA6Auto} removeGridA6Auto={props.removeGridA6Auto} />
				<ButtonChangeA7 id={7} addPieceTopAuto={props.addPieceTopAuto} removePieceTopAuto={props.removePieceTopAuto} gridA7Auto={props.gridA7Auto} removeGridA7Auto={props.removeGridA7Auto} />
				<ButtonChangeA8 id={8} addPieceTopAuto={props.addPieceTopAuto} removePieceTopAuto={props.removePieceTopAuto} gridA8Auto={props.gridA8Auto} removeGridA8Auto={props.removeGridA8Auto} />
				<ButtonChangeA9 id={9} addPieceTopAuto={props.addPieceTopAuto} removePieceTopAuto={props.removePieceTopAuto} gridA9Auto={props.gridA9Auto} removeGridA9Auto={props.removeGridA9Auto} />
				<ButtonChangeB1 id={10} addPieceMiddleAuto={props.addPieceMiddleAuto} removePieceMiddleAuto={props.removePieceMiddleAuto} gridB1Auto={props.gridB1Auto} removeGridB1Auto={props.removeGridB1Auto} />
				<ButtonChangeB2 id={11} addPieceMiddleAuto={props.addPieceMiddleAuto} removePieceMiddleAuto={props.removePieceMiddleAuto} gridB2Auto={props.gridB2Auto} removeGridB2Auto={props.removeGridB2Auto} />
				<ButtonChangeB3 id={12} addPieceMiddleAuto={props.addPieceMiddleAuto} removePieceMiddleAuto={props.removePieceMiddleAuto} gridB3Auto={props.gridB3Auto} removeGridB3Auto={props.removeGridB3Auto} />
				<ButtonChangeB4 id={13} addPieceMiddleAuto={props.addPieceMiddleAuto} removePieceMiddleAuto={props.removePieceMiddleAuto} gridB4Auto={props.gridB4Auto} removeGridB4Auto={props.removeGridB4Auto} />
				<ButtonChangeB5 id={14} addPieceMiddleAuto={props.addPieceMiddleAuto} removePieceMiddleAuto={props.removePieceMiddleAuto} gridB5Auto={props.gridB5Auto} removeGridB5Auto={props.removeGridB5Auto} />
				<ButtonChangeB6 id={15} addPieceMiddleAuto={props.addPieceMiddleAuto} removePieceMiddleAuto={props.removePieceMiddleAuto} gridB6Auto={props.gridB6Auto} removeGridB6Auto={props.removeGridB6Auto} />
				<ButtonChangeB7 id={16} addPieceMiddleAuto={props.addPieceMiddleAuto} removePieceMiddleAuto={props.removePieceMiddleAuto} gridB7Auto={props.gridB7Auto} removeGridB7Auto={props.removeGridB7Auto} />
				<ButtonChangeB8 id={17} addPieceMiddleAuto={props.addPieceMiddleAuto} removePieceMiddleAuto={props.removePieceMiddleAuto} gridB8Auto={props.gridB8Auto} removeGridB8Auto={props.removeGridB8Auto} />
				<ButtonChangeB9 id={18} addPieceMiddleAuto={props.addPieceMiddleAuto} removePieceMiddleAuto={props.removePieceMiddleAuto} gridB9Auto={props.gridB9Auto} removeGridB9Auto={props.removeGridB9Auto} />
				<ButtonChangeC1 id={19} addPieceBottomAuto={props.addPieceBottomAuto} removePieceBottomAuto={props.removePieceBottomAuto} gridC1Auto={props.gridC1Auto} removeGridC1Auto={props.removeGridC1Auto} />
				<ButtonChangeC2 id={20} addPieceBottomAuto={props.addPieceBottomAuto} removePieceBottomAuto={props.removePieceBottomAuto} gridC2Auto={props.gridC2Auto} removeGridC2Auto={props.removeGridC2Auto} />
				<ButtonChangeC3 id={21} addPieceBottomAuto={props.addPieceBottomAuto} removePieceBottomAuto={props.removePieceBottomAuto} gridC3Auto={props.gridC3Auto} removeGridC3Auto={props.removeGridC3Auto} />
				<ButtonChangeC4 id={22} addPieceBottomAuto={props.addPieceBottomAuto} removePieceBottomAuto={props.removePieceBottomAuto} gridC4Auto={props.gridC4Auto} removeGridC4Auto={props.removeGridC4Auto} />
				<ButtonChangeC5 id={23} addPieceBottomAuto={props.addPieceBottomAuto} removePieceBottomAuto={props.removePieceBottomAuto} gridC5Auto={props.gridC5Auto} removeGridC5Auto={props.removeGridC5Auto} />
				<ButtonChangeC6 id={24} addPieceBottomAuto={props.addPieceBottomAuto} removePieceBottomAuto={props.removePieceBottomAuto} gridC6Auto={props.gridC6Auto} removeGridC6Auto={props.removeGridC6Auto} />
				<ButtonChangeC7 id={25} addPieceBottomAuto={props.addPieceBottomAuto} removePieceBottomAuto={props.removePieceBottomAuto} gridC7Auto={props.gridC7Auto} removeGridC7Auto={props.removeGridC7Auto} />
				<ButtonChangeC8 id={26} addPieceBottomAuto={props.addPieceBottomAuto} removePieceBottomAuto={props.removePieceBottomAuto} gridC8Auto={props.gridC8Auto} removeGridC8Auto={props.removeGridC8Auto} />
				<ButtonChangeC9 id={27} addPieceBottomAuto={props.addPieceBottomAuto} removePieceBottomAuto={props.removePieceBottomAuto} gridC9Auto={props.gridC9Auto} removeGridC9Auto={props.removeGridC9Auto} />
			</div>
		</div>
	);
}

export default CombinedButtons;
