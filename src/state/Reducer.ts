import { Subtopic, Topic } from '../models/models';
import { IAppState } from '../models/state';
import { ActionTypes, IAction } from './Actions';


const INITIAL_STATE: IAppState = {
	user: null,
	cache: {
		matches: []
	},
	notes: {
		[Topic.auto]: '',
		[Topic.pathing]: '',
		[Topic.coral]: '',
		[Topic.algae]: '',
		[Topic.drivers]: '',
		[Topic.hp]: '',
		[Topic.penalties]: '',
		[Topic.climb]: '',
		[Topic.defense]: '',
		[Topic.other]: '',
	},
	superNotes: {
		[Subtopic.autoPlacementAccuracy]: '',
		[Subtopic.pathingDrivers]: '',
		[Subtopic.coralGroundCollection]: '',
		[Subtopic.coralStationCollection]: '',
		[Subtopic.coralScoring]: '',
		[Subtopic.algaeGroundCollection]: '',
		[Subtopic.algaeReefCollection]: '',
		[Subtopic.algaeProcessor]: '',
		[Subtopic.algaeBarge]: '',
		[Subtopic.driverAbility]: '',
		[Subtopic.hpAtProcessor]: '',
		[Subtopic.climbSkill]: '',
		[Subtopic.defenseDriverSkill]: '',
		[Subtopic.defenseType]: ''
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
		case ActionTypes.SET_SUPER_NOTE:
			return {
				...state,
				superNotes: {
					...state.superNotes,
					[action.payload.subtopic]: action.payload.key
				}
			};
		default:
			return state;
	}
}
