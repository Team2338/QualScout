import { Topic } from '../models/models';
import { IAppState } from '../models/state';
import { ActionTypes, IAction } from './Actions';


const INITIAL_STATE: IAppState = {
	user: null,
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

export function reducer(state: IAppState = INITIAL_STATE, action: IAction): IAppState {

	switch (action.type) {
		case ActionTypes.CLEAR_NOTES:
			return {
				...state,
				notes: INITIAL_STATE.notes
			};
		case ActionTypes.LOGIN_SUCCESS:
			return {
				...state,
				user: action.payload
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
		case ActionTypes.SAVE_NOTE:
			return {
				...state,
				notes: {
					...state.notes,
					[action.payload.topic]: action.payload.content
				}
			};
		default:
			return state;
	}
}
