
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
    SUBMIT_PENALTY_NOTES: '[QUAL] Submit Penalties Notes',
    SUBMIT_DRIVERS_NOTES: '[QUAL] Submit Drivers Notes'
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
export const sendNotes = (topic, content) => {
    let type;
    switch (topic) {
        case 'Auto':
            type = ActionTypes.SUBMIT_AUTO_NOTES
            break;
        case 'Collection':
            type = ActionTypes.SUBMIT_COLLECTION_NOTES
            break;
        case 'Shooting Position':
            type = ActionTypes.SUBMIT_SHOOT_POS_NOTES
            break;
        case 'Shooting Consistency':
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
        case 'Human Player':
            type = ActionTypes.SUBMIT_HP_NOTES
            break;
        case 'Penalties':
            type = ActionTypes.SUBMIT_PENALTY_NOTES
            break;
        case 'Drivers':
            type = ActionTypes.SUBMIT_DRIVERS_NOTES
            break;
        default:
            
    }
    return {
    type,
    payload: content, topic
}
}
