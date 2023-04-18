import { AppState } from '../models/state';
import { ActionTypes } from './Actions';

function generateNodeStates(): number[] {
	const states: number[] = [];
	for (let i = 0; i < 27; i++) {
		states.push(0);
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
	autoGrid[index] = (state.auto.grid[index] + 1) % 2;

	return {
		...state,
		auto: {
			...state.auto,
			grid: autoGrid
		}
	};
}

function handleActivateTeleopNode(state, index): AppState {
	const teleopGrid = state.teleop.grid.slice();
	const numAutoPieces = state.auto.grid[index];
	const maxTeleopPieces = 2 - numAutoPieces;
	const currentTeleopPieces = teleopGrid[index];

	teleopGrid[index] = (currentTeleopPieces + 1) % (maxTeleopPieces + 1);

	return {
		...state,
		teleop: {
			...state.teleop,
			grid: teleopGrid
		}
	};

}
