
export const ActionTypes = {
    GET_OFFLINE_MATCHES_SUCCESS: '[CACHE] Successfully got offline matches',
    RESET_STATE: '[GLOBAL] Reset State',
    CLEAR_OFFLINE_MATCHES: '[CACHE] Clear matches',
    SUBMIT_AUTO_NOTES: '[QUAL] Submit Auto Notes',
    SUBMIT_COLLECTION_NOTES: '[QUAL] Submit Collection Notes',
    SUBMIT_SHOOT_POS_NOTES: '[QUAL] Submiit Shooting Position Notes',
    SUBMIT_SHOOT_COS_NOTES: '[QUAL] Submit Shooting Consistency Notes',
    SUBMIT_PATH_NOTES: '[QUAL] Submit Path Notes',
    SUBMIT_DEFENSE_NOTES: '[QUAL] Submit Defense Notes',
    SUBMIT_CLIMBING_NOTES: '[QUAL] Submit Climing Notes',
    SUBMIT_HP_NOTES: '[QUAL] Submit Human Player Notes',
    SUBMIT_PENALTY_NOTES: '[QUAL] Submit Penalties Notes'
};


export const resetState = () => {
    return {
        type: ActionTypes.RESET_STATE
    };
};

export const getOfflineMatchesSuccess = (matches) => {
    return {
        type: ActionTypes.GET_OFFLINE_MATCHES_SUCCESS,
        payload: matches
    };
};
export const clearOfflineMatches = () => {
    return {
        type: ActionTypes.CLEAR_OFFLINE_MATCHES,
    };
};
export const sendNotes = ({category, type, value}) => {
    switch (category) {
        case 'Auto':
            type = ActionTypes.SUBMIT_AUTO_NOTES
            break;
        case 'Collection':
            type = ActionTypes.SUBMIT_COLLECTION_NOTES
            break;
        case 'ShootingPosition':
            type = ActionTypes.SUBMIT_SHOOT_POS_NOTES
            break;
        case 'ShootingConsistency':
            type = ActionTypes.SUBMIT_SHOOT_COS_NOTES
            break;
        case 'Path':
            type = ActionTypes.SUBMIT_PATH_NOTES
            break;
        case 'Defense':
            type = ActionTypes.SUBMIT_DEFENSE_NOTES
            break;
        case 'Climbing':
            type = ActionTypes.SUBMIT_CLIMBING_NOTES
            break;
        case 'HumanPlayer':
            type = ActionTypes.SUBMIT_HP_NOTES
            break;
        case 'Penalties':
            type = ActionTypes.SUBMIT_PENALTY_NOTES
            break;
        default:
            console.log('Error, submit a category please')
    }
    return {
    type: type,
    payload: value
}
}
