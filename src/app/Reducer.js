import { ActionTypes } from './Actions';

function generateNodeStates() {
	const states = [];
	for (let i = 0; i < 27; i++) {
		states.push({
			disabled: false,
			value: 0
		});
	}
	return states;
}

const INITIAL_STATE = {
	teleop: {
		grid: generateNodeStates(),
		chargeStation: 0
	},
	auto: {
		grid: generateNodeStates(),
		park: 0,
		chargeStation: 0
	}
};

export function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ActionTypes.RESET_STATE:
			return INITIAL_STATE;
		case ActionTypes.ACTIVATE_AUTO_NODE:
			return handleActivateAutoNode(state, action.payload);
		case ActionTypes.ACTIVATE_TELEOP_NODE:
			return handleActivateTeleopNode(state, action.payload);
		case ActionTypes.DEACTIVATE_NODE:
			return handleDeactivateNode(state, action.payload);
		case ActionTypes.SET_AUTO_PARK:
			return {
				...state,
				auto: {
					...state.auto,
					park: action.payload
				}
			};
		case ActionTypes.SET_AUTO_CHARGE_STATION:
			return {
				...state,
				auto: {
					...state.auto,
					chargeStation: action.payload
				}
			};
		case ActionTypes.SET_TELEOP_CHARGE_STATION:
			return {
				...state,
				teleop: {
					...state.teleop,
					chargeStation: action.payload
				}
			};
		default:
			return state;
	}
}

function handleActivateAutoNode(state, index) {
	const autoGrid = state.auto.grid.slice();
	autoGrid[index] = {
		...autoGrid[index],
		value: 1,
		disabled: false
	};

	const teleopGrid = state.teleop.grid.slice();
	teleopGrid[index] = {
		...teleopGrid[index],
		value: 0,
		disabled: true
	};

	return {
		...state,
		auto: {
			...state.auto,
			grid: autoGrid
		},
		teleop: {
			...state.teleop,
			grid: teleopGrid
		}
	};
}

function handleActivateTeleopNode(state, index) {
	const autoGrid = state.auto.grid.slice();
	autoGrid[index] = {
		...autoGrid[index],
		value: 0,
		disabled: true
	};

	const teleopGrid = state.teleop.grid.slice();
	teleopGrid[index] = {
		...teleopGrid[index],
		value: 1,
		disabled: false
	};

	return {
		...state,
		auto: {
			...state.auto,
			grid: autoGrid
		},
		teleop: {
			...state.teleop,
			grid: teleopGrid
		}
	};

}

function handleDeactivateNode(state, index) {
	const autoGrid = state.auto.grid.slice();
	autoGrid[index] = {
		...autoGrid[index],
		value: 0,
		disabled: false
	};

	const teleopGrid = state.teleop.grid.slice();
	teleopGrid[index] = {
		...teleopGrid[index],
		value: 0,
		disabled: false
	};

	return {
		...state,
		auto: {
			...state.auto,
			grid: autoGrid
		},
		teleop: {
			...state.teleop,
			grid: teleopGrid
		}
	};
}
