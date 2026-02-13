import {
	ICachedMatch,
	ICachedSuperNoteRequest,
	IMatch,
	IMatchLineup,
	ISuperNoteRequest,
	IUser
} from '../models/models';
import { IAppState, LoadStatus } from '../models/state';
import GearscoutService from '../services/GearscoutService';
import gearscoutService from '../services/GearscoutService';
import {
	clearOfflineMatches,
	clearOfflineSuperNotes,
	getOfflineMatchesSuccess,
	getOfflineSuperNotesSuccess,
	updateSchedule
} from './Actions';
import { AppDispatch } from './Store';
import { APP_CONFIG } from '../config/app.config';

type GetState = () => IAppState;
type MatchResponseStatus = 'SUCCESS' | 'OFFLINE' | 'FAIL';

export const fetchOfflineRequests = () => async (dispatch: AppDispatch) => {
	const offlineRequests: ICachedMatch[] = readOfflineRequestsFromStorage();
	dispatch(getOfflineMatchesSuccess(offlineRequests));
};

export const fetchOfflineSuperNotes = () => async (dispatch: AppDispatch) => {
	const offlineRequests: ICachedSuperNoteRequest[] = readOfflineSuperNotesFromStorage();
	dispatch(getOfflineSuperNotesSuccess(offlineRequests));
};

export const saveOfflineRequest = (teamNumber: string, secretCode: string, match: IMatch) => async (dispatch: AppDispatch, getState: GetState) => {
	const request: ICachedMatch = {
		...match,
		teamNumber,
		secretCode
	};
	const offlineRequests: ICachedMatch[] = getState().cache.matches
		.concat(request);

	localStorage.setItem(APP_CONFIG.OFFLINE_REQUEST_LOCATION, JSON.stringify(offlineRequests));
	dispatch(getOfflineMatchesSuccess(offlineRequests));
};

export const saveOfflineSuperNotesRequest = (teamNumber: string, secretCode: string, superNotes: ISuperNoteRequest) => async (dispatch: AppDispatch, getState: GetState) => {
	const request: ICachedSuperNoteRequest = {
		...superNotes,
		teamNumber: teamNumber,
		secretCode: secretCode,
	};
	const offlineRequests: ICachedSuperNoteRequest[] = getState().cache.superNotes.concat(request);

	localStorage.setItem(APP_CONFIG.OFFLINE_SUPER_NOTE_REQUEST_LOCATION, JSON.stringify(offlineRequests));
	dispatch(getOfflineSuperNotesSuccess(offlineRequests));
};

export const sendOfflineRequests = () => async (dispatch: AppDispatch, getState: GetState) => {
	const offlineRequests: ICachedMatch[] = getState().cache.matches;
	localStorage.setItem(APP_CONFIG.OFFLINE_REQUEST_LOCATION, '[]');
	dispatch(clearOfflineMatches());

	const requests: Promise<MatchResponseStatus>[] = offlineRequests.map(
		(match: ICachedMatch) => sendRequest(match.teamNumber, match.secretCode, match)
	);

	const results: PromiseSettledResult<MatchResponseStatus>[] = await Promise.allSettled(requests);
	const nextOfflineRequests: ICachedMatch[] = [];
	results.forEach((result, index) => {
		if (result.status === 'fulfilled' && result.value === 'OFFLINE') {
			nextOfflineRequests.push(offlineRequests[index]);
		}
	});

	if (nextOfflineRequests.length === 0) {
		alert('Successfully sent all cached qualitative notes');
		return;
	}

	localStorage.setItem(APP_CONFIG.OFFLINE_REQUEST_LOCATION, JSON.stringify(offlineRequests));
	dispatch(getOfflineMatchesSuccess(nextOfflineRequests));
	alert(`Failed to send ${nextOfflineRequests.length} qualitative matches`);
};

export const sendOfflineSuperNotesRequests = () => async (dispatch: AppDispatch, getState: GetState) => {
	const offlineRequests: ICachedSuperNoteRequest[] = getState().cache.superNotes;
	localStorage.setItem(APP_CONFIG.OFFLINE_SUPER_NOTE_REQUEST_LOCATION, '[]');
	dispatch(clearOfflineSuperNotes());

	const requests: Promise<MatchResponseStatus>[] = offlineRequests.map(
		(request: ICachedSuperNoteRequest)=> sendSuperNoteRequest(request.teamNumber, request.secretCode, request)
	);

	const results: PromiseSettledResult<MatchResponseStatus>[] = await Promise.allSettled(requests);
	const nextOfflineRequests: ICachedSuperNoteRequest[] = [];
	results.forEach((result, index) => {
		if (result.status === 'fulfilled' && result.value === 'OFFLINE') {
			nextOfflineRequests.push(offlineRequests[index]);
		}
	});

	if (nextOfflineRequests.length === 0) {
		alert('Successfully sent all cached superscout data');
		return;
	}

	localStorage.setItem(APP_CONFIG.OFFLINE_REQUEST_LOCATION, JSON.stringify(offlineRequests));
	dispatch(getOfflineSuperNotesSuccess(nextOfflineRequests));
	alert(`Failed to send ${nextOfflineRequests.length} superscout matches`);
};

export const submitMatch = (match: IMatch) => async (dispatch: AppDispatch, getState: GetState) => {
	const user: IUser | null = getState().user;
	if (!user) {
		throw new Error('User not logged in!');
	}
	const result: MatchResponseStatus = await sendRequest(user.teamNumber, user.secretCode, match);
	if (result === 'OFFLINE') {
		dispatch(saveOfflineRequest(user.teamNumber, user.secretCode, match));
	}
	if (result === 'FAIL') {
		throw new Error('Failed to submit data');
	}
};

export const submitSuperNotes = (notes: ISuperNoteRequest) => async (dispatch: AppDispatch, getState: GetState) => {
	const user: IUser | null = getState().user;
	if (!user) {
		throw new Error('User not logged in!');
	}
	const result: MatchResponseStatus = await sendSuperNoteRequest(user.teamNumber, user.secretCode, notes);
	if (result === 'OFFLINE') {
		dispatch(saveOfflineSuperNotesRequest(user.teamNumber, user.secretCode, notes));
	}
	if (result === 'FAIL') {
		throw new Error('Failed to submit data');
	}
};

export const fetchEventSchedule = (gameYear: number, tbaCode: string) => async (dispatch: AppDispatch) => {
	dispatch(updateSchedule(LoadStatus.loading));
	try {
		const result = await gearscoutService.getEventSchedule(gameYear, tbaCode);
		const schedule: IMatchLineup[] = result.data;
		dispatch(updateSchedule(LoadStatus.success, schedule));
	} catch {
		dispatch(updateSchedule(LoadStatus.fail));
	}
};

/*
	#########################
	### Private functions ###
	#########################
 */

const readOfflineRequestsFromStorage = (): ICachedMatch[] => {
	const serializedOfflineRequests: string = localStorage.getItem(APP_CONFIG.OFFLINE_REQUEST_LOCATION) ?? '[]';
	return JSON.parse(serializedOfflineRequests);
};

const readOfflineSuperNotesFromStorage = (): ICachedSuperNoteRequest[] => {
	const serializedOfflineRequests = localStorage.getItem(APP_CONFIG.OFFLINE_SUPER_NOTE_REQUEST_LOCATION) ?? '[]';
	return JSON.parse(serializedOfflineRequests);
};

const sendRequest = async (teamNumber: string, secretCode: string, match: IMatch): Promise<MatchResponseStatus> => {
	try {
		await GearscoutService.submitMatch(teamNumber, secretCode, match);
		return Promise.resolve('SUCCESS');
	} catch (error) {
		console.log(error);
		if (error && typeof error === 'object' && 'code' in error && error.code === 'ERR_NETWORK') {
			return Promise.resolve('OFFLINE');
		}

		return Promise.resolve('FAIL');
	}
};

const sendSuperNoteRequest = async (teamNumber: string, secretCode: string, quant: ISuperNoteRequest): Promise<MatchResponseStatus> => {
	try {
		await GearscoutService.superScout(teamNumber, secretCode, quant);
		return Promise.resolve('SUCCESS');
	} catch (error) {
		console.log(error);
		if (error && typeof error === 'object' && 'code' in error && error.code === 'ERR_NETWORK') {
			return Promise.resolve('OFFLINE');
		}

		return Promise.resolve('FAIL');
	}
};