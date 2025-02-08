
export const ActionTypes = {
	GET_OFFLINE_MATCHES_SUCCESS: '[CACHE] Successfully got offline matches',
	RESET_STATE: '[GLOBAL] Reset State',
	CLEAR_OFFLINE_MATCHES: '[CACHE] Clear matches',
	SUBMIT_AUTO_NOTES: '[QUAL] Submit Auto Notes',
	SUBMIT_COLLECTION_NOTES: '[QUAL] Submit Collection Notes',
	SUBMIT_SHOOTING_NOTES: '[QUAL] Submit Shooting Notes',
	SUBMIT_AMP_NOTES: '[QUAL] Submit Amp Notes',
	SUBMIT_PATH_NOTES: '[QUAL] Submit Path Notes',
	SUBMIT_DEFENSE_NOTES: '[QUAL] Submit Defense Notes',
	SUBMIT_ENDGAME_NOTES: '[QUAL] Submit Endgame Notes',
	SUBMIT_HP_NOTES: '[QUAL] Submit Human Player Notes',
	SUBMIT_PENALTY_NOTES: '[QUAL] Submit Penalties Notes',
	SUBMIT_DRIVERS_NOTES: '[QUAL] Submit Drivers Notes',
	SUBMIT_OTHER_NOTES: '[QUAL] Submit Other Notes',
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
export const sendNotes = (topic: string, content: string) => {
	let type: string;
	switch (topic) {
		case 'Auto':
			type = ActionTypes.SUBMIT_AUTO_NOTES
			break;
		case 'Collection':
			type = ActionTypes.SUBMIT_COLLECTION_NOTES
			break;
		case 'Shooting':
			type = ActionTypes.SUBMIT_SHOOTING_NOTES
			break;
		case 'Amp':
			type = ActionTypes.SUBMIT_AMP_NOTES
			break;
		case 'Path':
			type = ActionTypes.SUBMIT_PATH_NOTES
			break;
		case 'Defense':
			type = ActionTypes.SUBMIT_DEFENSE_NOTES
			break;
		case 'Endgame':
			type = ActionTypes.SUBMIT_ENDGAME_NOTES
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
		case 'Other':
			type = ActionTypes.SUBMIT_OTHER_NOTES
			break;
		default:

	}
	return {
		type,
		payload: content
	}
}
