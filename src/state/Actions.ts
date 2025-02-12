import { IUser, Topic } from '../models/models';

export interface IAction {
	type: string;
	payload?: any;
}

export const ActionTypes = {
	LOGIN_SUCCESS: '[AUTH] LOGIN SUCCESS',
	GET_OFFLINE_MATCHES_SUCCESS: '[CACHE] Successfully got offline matches',
	CLEAR_OFFLINE_MATCHES: '[CACHE] Clear matches',
	CLEAR_NOTES: '[NOTE] Clear notes',
	SAVE_NOTE: '[NOTE] Save note',
};

export const loginSuccess = (user: IUser): IAction => ({
	type: ActionTypes.LOGIN_SUCCESS,
	payload: user
});

export const getOfflineMatchesSuccess = (matches): IAction => ({
	type: ActionTypes.GET_OFFLINE_MATCHES_SUCCESS,
	payload: matches
});

export const clearOfflineMatches = (): IAction => ({
	type: ActionTypes.CLEAR_OFFLINE_MATCHES,
});

export const clearNotes = (): IAction => ({
	type: ActionTypes.CLEAR_NOTES
});

export const saveNote = (topic: Topic, content: string): IAction => ({
	type: ActionTypes.SAVE_NOTE,
	payload: {
		topic: topic,
		content: content
	}
});
