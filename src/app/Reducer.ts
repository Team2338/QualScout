import { AppState, NodeState } from '../models/state';
import { ActionTypes } from './Actions';

function generateNodeStates(): NodeState[] {
	const states: NodeState[] = [];
	for (let i = 0; i < 27; i++) {
		states.push({
			disabled: false,
			value: 0
		});
	}
	return states;
}

const INITIAL_STATE: AppState = {
	cache: {
		matches: []
	},
	auto: {
		grid: generateNodeStates(),
		park: 0,
		chargeStation: 0
	},
	teleop: {
		grid: generateNodeStates(),
		chargeStation: 0
	}
};

export function reducer(state: AppState = INITIAL_STATE, action): AppState {
	switch (action.type) {
		case ActionTypes.RESET_STATE:
			return {
				...state,
				auto: INITIAL_STATE.auto,
				teleop: INITIAL_STATE.teleop
			};
		case ActionTypes.GET_OFFLINE_MATCHES_SUCCESS:
			return {
				...state,
				cache: {
					matches: action.payload
				}
			};
		case ActionTypes.CLEAR_OFFLINE_MATCHES:
			return {
				...state,
				cache: {
					matches: []
				}
			};
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

function handleActivateAutoNode(state, index): AppState {
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

function handleActivateTeleopNode(state, index): AppState {
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

function handleDeactivateNode(state, index): AppState {
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
