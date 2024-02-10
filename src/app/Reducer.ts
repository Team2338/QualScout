
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
        'Drivers': ''
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
                "Auto": state.notes['Auto'].concat(', ' + action.payload)
                }
            }
        case ActionTypes.SUBMIT_COLLECTION_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    "Collection": state.notes['Collection'].concat(', ' + action.payload)
                }
            }
        case ActionTypes.SUBMIT_SHOOT_POS_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    "Shooting Position": state.notes['Shooting Position'].concat(', ' + action.payload)
                }
            }
        case ActionTypes.SUBMIT_SHOOT_COS_NOTES:
            return{
                ...state,
                notes: {
                    ...state.notes,
                    "Shooting Consistency": state.notes['Shooting Consistency'].concat(', ' + action.payload)
                }
            }
        case ActionTypes.SUBMIT_PATH_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    "Path": state.notes['Path'].concat(', ' + action.payload)
                }
            }
        case ActionTypes.SUBMIT_DEFENSE_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    'Defense': state.notes['Defense'].concat(', ' + action.payload)
                }
            }
        case ActionTypes.SUBMIT_CLIMBING_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    'Climbing': state.notes['Climbing'].concat(', ' + action.payload)
                }
            }
        case ActionTypes.SUBMIT_HP_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    "Human Player": state.notes['Human Player'].concat(', ' + action.payload)
                }
            }
        case ActionTypes.SUBMIT_PENALTY_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    'Penalties': state.notes['Penalties'].concat(', ' + action.payload)
                }
            }
        case ActionTypes.SUBMIT_DRIVERS_NOTES: 
        return {
            ...state,
            notes: {
                ...state.notes,
                'Drivers': state.notes['Drivers'].concat(', ' + action.payload)
            }
        }
        default:
            return state;
    }
}
