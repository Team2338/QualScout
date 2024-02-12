
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
    const checkSpace = (categoryName, payload) => {
        if (state.notes[categoryName] !== '') {
           return state.notes[categoryName].concat(' / ', payload);
        }
        else {
            return payload;
        }
        
    }

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
                    "Auto": checkSpace('Auto', action.payload)
                }
            }
        case ActionTypes.SUBMIT_COLLECTION_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    "Collection": checkSpace('Collection', action.payload)
                }
            }
        case ActionTypes.SUBMIT_SHOOT_POS_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    "Shooting Position": checkSpace('Shooting Position', action.payload)
                }
            }
        case ActionTypes.SUBMIT_SHOOT_COS_NOTES:
            return{
                ...state,
                notes: {
                    ...state.notes,
                    "Shooting Consistency": checkSpace('Shooting Consistency', action.payload)
                }
            }
        case ActionTypes.SUBMIT_PATH_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    "Path": checkSpace('Path', action.payload)
                }
            }
        case ActionTypes.SUBMIT_DEFENSE_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    'Defense': checkSpace('Defense', action.payload)
                }
            }
        case ActionTypes.SUBMIT_CLIMBING_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    'Climbing': checkSpace('Climbing', action.payload)
                }
            }
        case ActionTypes.SUBMIT_HP_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    "Human Player": checkSpace('Human Player', action.payload)
                }
            }
        case ActionTypes.SUBMIT_PENALTY_NOTES:
            return {
                ...state,
                notes: {
                    ...state.notes,
                    'Penalties': checkSpace('Penalties', action.payload)
                }
            }
        case ActionTypes.SUBMIT_DRIVERS_NOTES: 
        return {
            ...state,
            notes: {
                ...state.notes,
                'Drivers': checkSpace('Drivers', action.payload)
            }
        }
        default:
            return state;
    }
}
