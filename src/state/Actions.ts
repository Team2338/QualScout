import { Topic } from '../models/models';

export const ActionTypes = {
	GET_OFFLINE_MATCHES_SUCCESS: '[CACHE] Successfully got offline matches',
	RESET_STATE: '[GLOBAL] Reset State',
	CLEAR_OFFLINE_MATCHES: '[CACHE] Clear matches',
	SAVE_NOTE: '[QUAL] Save note',
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

export const saveNote = (topic: Topic, content: string) => ({
	type: ActionTypes.SAVE_NOTE,
	payload: {
		topic: topic,
		content: content
	}
});
