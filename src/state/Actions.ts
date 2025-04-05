import { ICachedMatch, ICachedSuperNoteRequest, IMatchLineup, IUser, Subtopic, Topic } from '../models/models';
import { LoadStatus } from '../models/state';

export interface IAction {
	type: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	payload?: any;
}

export const ActionTypes = {
	SERVICE_WORKER_INSTALLED: '[UPDATE] SERVICE_WORKER_INSTALLED',
	LOGIN_SUCCESS: '[AUTH] LOGIN SUCCESS',
	GET_OFFLINE_MATCHES_SUCCESS: '[CACHE] Successfully got offline matches',
	GET_OFFLINE_SUPER_NOTES_SUCCESS: '[CACHE] Successfully got offline super notes',
	CLEAR_OFFLINE_MATCHES: '[CACHE] Clear matches',
	CLEAR_OFFLINE_SUPER_NOTES: '[CACHE] Clear super notes',
	CLEAR_NOTES: '[NOTE] Clear notes',
	SAVE_NOTE: '[NOTE] Save note',
	SET_SUPER_NOTE: '[SUPER] Set super note',
	UPDATE_SCHEDULE: '[SCHEDULE] Update',
};

export const serviceWorkerInstalled = (sw: ServiceWorker): IAction => ({
	type: ActionTypes.SERVICE_WORKER_INSTALLED,
	payload: sw
});

export const loginSuccess = (user: IUser): IAction => ({
	type: ActionTypes.LOGIN_SUCCESS,
	payload: user
});

export const getOfflineMatchesSuccess = (matches: ICachedMatch[]): IAction => ({
	type: ActionTypes.GET_OFFLINE_MATCHES_SUCCESS,
	payload: matches
});

export const getOfflineSuperNotesSuccess = (superNotes: ICachedSuperNoteRequest[]): IAction => ({
	type: ActionTypes.GET_OFFLINE_SUPER_NOTES_SUCCESS,
	payload: superNotes
});

export const clearOfflineMatches = (): IAction => ({
	type: ActionTypes.CLEAR_OFFLINE_MATCHES
});

export const clearOfflineSuperNotes = (): IAction => ({
	type: ActionTypes.CLEAR_OFFLINE_SUPER_NOTES
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

export const setSuperNote = (subtopic: Subtopic, key: string): IAction => ({
	type: ActionTypes.SET_SUPER_NOTE,
	payload: {
		subtopic: subtopic,
		key: key
	}
});

export const updateSchedule = (loadStatus: LoadStatus, schedule: IMatchLineup[] = null): IAction => ({
	type: ActionTypes.UPDATE_SCHEDULE,
	payload: {
		loadStatus: loadStatus,
		schedule: schedule
	}
});
