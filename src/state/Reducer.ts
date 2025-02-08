import { Topic } from '../models/models';
import { IAppState } from '../models/state';
import { ActionTypes } from './Actions';


const INITIAL_STATE: IAppState = {
	cache: {
		matches: []
	},
	notes: {
		[Topic.auto]: '',
		[Topic.collection]: '',
		[Topic.shooting]: '',
		[Topic.amp]: '',
		[Topic.path]: '',
		[Topic.defense]: '',
		[Topic.endgame]: '',
		[Topic.humanPlayer]: '',
		[Topic.penalties]: '',
		[Topic.drivers]: '',
		[Topic.other]: '',
	}
};

export function reducer(state: IAppState = INITIAL_STATE, action): IAppState {

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
					[Topic.auto]: action.payload
				}
			}
		case ActionTypes.SUBMIT_COLLECTION_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					[Topic.collection]: action.payload
				}
			}
		case ActionTypes.SUBMIT_SHOOTING_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					[Topic.shooting]: action.payload
				}
			}
		case ActionTypes.SUBMIT_AMP_NOTES:
			return{
				...state,
				notes: {
					...state.notes,
					[Topic.amp]: action.payload
				}
			}
		case ActionTypes.SUBMIT_PATH_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					[Topic.path]: action.payload
				}
			}
		case ActionTypes.SUBMIT_DEFENSE_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					[Topic.defense]: action.payload
				}
			}
		case ActionTypes.SUBMIT_ENDGAME_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					[Topic.endgame]: action.payload
				}
			}
		case ActionTypes.SUBMIT_HP_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					[Topic.humanPlayer]: action.payload
				}
			}
		case ActionTypes.SUBMIT_PENALTY_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					[Topic.penalties]: action.payload
				}
			}
		case ActionTypes.SUBMIT_DRIVERS_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					[Topic.drivers]: action.payload
				}
			}
		case ActionTypes.SUBMIT_OTHER_NOTES:
			return {
				...state,
				notes: {
					...state.notes,
					[Topic.other]: action.payload
				}
			}
		default:
			return state;
	}
}
