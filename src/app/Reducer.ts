
import { AppState } from '../models/state';
import { ActionTypes } from './Actions';


const INITIAL_STATE: AppState = {
    cache: {
        matches: []
    },
    notes: {
        "Auto": '',
        "Collection": '', 
        "Shooting Position": '',
        "Shooting Consistency": '',
        "Path": '', 
        "Defense": '', 
        "Climbing": '', 
        "Human Player": '', 
        "Penalties": '',
    }
};
export function reducer(state: AppState = INITIAL_STATE, action): AppState {
    switch (action.type) {
        
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
                "Auto": action.payload
                }
            }
        case ActionTypes.SUBMIT_COLLECTION_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    "Collection": action.payload
                }
            }
        case ActionTypes.SUBMIT_SHOOT_POS_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    "Shooting Position": action.payload
                }
            }
        case ActionTypes.SUBMIT_SHOOT_COS_NOTES:
            return{
                ...state,
                notes: {
                    ...state.notes,
                    "Shooting Consistency": action.payload
                }
            }
        case ActionTypes.SUBMIT_PATH_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    "Path": action.payload
                }
            }
        case ActionTypes.SUBMIT_DEFENSE_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    'Defense': action.payload
                }
            }
        case ActionTypes.SUBMIT_CLIMBING_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    'Climbing': action.payload
                }
            }
        case ActionTypes.SUBMIT_HP_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    "Human Player": action.payload
                }
            }
        case ActionTypes.SUBMIT_PENALTY_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    'Penalties': action.payload
                }
            }
        default:
            return state;
    }
}
