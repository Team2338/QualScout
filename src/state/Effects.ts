import { ISuperMatch, ICachedMatch, IMatch, IUser } from '../models/models';
import { IAppState } from '../models/state';
import GearscoutService from '../services/GearscoutService';
import { clearOfflineMatches, getOfflineMatchesSuccess } from './Actions';
import { AppDispatch } from './Store';

type GetState = () => IAppState;
type MatchResponseStatus = 'SUCCESS' | 'OFFLINE' | 'FAIL';
const OFFLINE_REQUEST_LOCATION: string = 'offlineRequests';

export const fetchOfflineRequests = () => async (dispatch: AppDispatch) => {
	const offlineRequests: ICachedMatch[] = readOfflineRequestsFromStorage();
	dispatch(getOfflineMatchesSuccess(offlineRequests));
};

export const saveOfflineRequest = (teamNumber: string, secretCode: string, match: IMatch) => async (dispatch: AppDispatch, getState: GetState) => {
	const request: ICachedMatch = {
		...match,
		teamNumber,
		secretCode
	};
	const offlineRequests: ICachedMatch[] = getState().cache.matches
		.concat(request);

	localStorage.setItem(OFFLINE_REQUEST_LOCATION, JSON.stringify(offlineRequests));
	dispatch(getOfflineMatchesSuccess(offlineRequests));
};

export const sendOfflineRequests = () => async (dispatch: AppDispatch, getState: GetState) => {
	const offlineRequests: ICachedMatch[] = getState().cache.matches;
	localStorage.setItem(OFFLINE_REQUEST_LOCATION, '[]');
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
		alert('Successfully sent all cached requests');
		return;
	}

	localStorage.setItem(OFFLINE_REQUEST_LOCATION, JSON.stringify(offlineRequests));
	dispatch(getOfflineMatchesSuccess(nextOfflineRequests));
	alert(`Failed to send ${nextOfflineRequests.length} requests`);
};

export const submitMatch = (match: IMatch) => async (dispatch: AppDispatch, getState: GetState) => {
	const user: IUser = getState().user;
	sendRequest(user.teamNumber, user.secretCode, match)
		.then((result: MatchResponseStatus) => {
			if (result === 'SUCCESS') {
				alert('Data Submitted!');
				return;
			}

			if (result === 'OFFLINE') {
				dispatch(saveOfflineRequest(user.teamNumber, user.secretCode, match));
				alert('You are offline! Saving request for later.');
				return;
			}

			alert('There was a problem submitting the data!');
		});

	const drop: ISuperMatch = getState().drop;
	sendRequestSuperScout(user.teamNumber, user.secretCode, drop)
		.then((result: MatchResponseStatus) => {
			if (result === 'SUCCESS') {
				alert('Data Submitted!');
				return;
			}

			if (result === 'OFFLINE') {
				dispatch(saveOfflineRequest(user.teamNumber, user.secretCode, match));
				alert('You are offline! Saving request for later.');
				return;
			}

			alert('There was a problem submitting the data!');
		});
};

/*
	#########################
	### Private functions ###
	#########################
 */

const readOfflineRequestsFromStorage = (): ICachedMatch[] => {
	const serializedOfflineRequests: string = localStorage.getItem('offlineRequests') ?? '[]';
	return JSON.parse(serializedOfflineRequests);
};

const sendRequest = async (teamNumber: string, secretCode: string, match: IMatch): Promise<MatchResponseStatus> => {
	try {
		await GearscoutService.submitMatch(teamNumber, secretCode, match);
		return Promise.resolve('SUCCESS');
	} catch (error) {
		console.log(error);
		if (error.code === 'ERR_NETWORK') {
			return Promise.resolve('OFFLINE');
		}

		return Promise.resolve('FAIL');
	}
};

//TODO: HANDLE CAHCING

const sendRequestSuperScout = async (teamNumber: string, secretCode: string, quant: ISuperMatch): Promise<MatchResponseStatus> => {
	try {
		await GearscoutService.superScout(teamNumber, secretCode, quant);
		return Promise.resolve('SUCCESS');
	} catch (error) {
		console.log(error);
		if (error.code === 'ERR_NETWORK') {
			return Promise.resolve('OFFLINE');
		}

		return Promise.resolve('FAIL');
	}
};