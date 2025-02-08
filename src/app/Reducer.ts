import { AppState } from '../models/state';
import { ActionTypes } from './Actions';


const INITIAL_STATE: AppState = {
	cache: {
		matches: []
	},
	notes: {
		auto: '',
		collection: '',
		shooting: '',
		amp: '',
		path: '',
		defense: '',
		endgame: '',
		humanPlayer: '',
		penalties: '',
		drivers: '',
		other: ''
	}
};

export function reducer(state: AppState = INITIAL_STATE, action): AppState {

	switch (action.type) {

		case ActionTypes.RESET_STATE:
			return {
				...state,
				notes: INITIAL_STATE.notes
			}
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
		case ActionTypes.SUBMIT_AUTO_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					auto: action.payload
				}
			}
		case ActionTypes.SUBMIT_COLLECTION_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					collection: action.payload
				}
			}
		case ActionTypes.SUBMIT_SHOOTING_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					shooting: action.payload
				}
			}
		case ActionTypes.SUBMIT_AMP_NOTES:
			return{
				...state,
				notes: {
					...state.notes,
					amp: action.payload
				}
			}
		case ActionTypes.SUBMIT_PATH_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					path: action.payload
				}
			}
		case ActionTypes.SUBMIT_DEFENSE_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					defense: action.payload
				}
			}
		case ActionTypes.SUBMIT_ENDGAME_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					endgame: action.payload
				}
			}
		case ActionTypes.SUBMIT_HP_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					humanPlayer: action.payload
				}
			}
		case ActionTypes.SUBMIT_PENALTY_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					penalties: action.payload
				}
			}
		case ActionTypes.SUBMIT_DRIVERS_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					drivers: action.payload
				}
			}
		case ActionTypes.SUBMIT_OTHER_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					other: action.payload
				}
			}
		default:
			return state;
	}
}
