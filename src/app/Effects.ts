import { ICachedMatch, IMatch } from '../models/models';
import { AppState } from '../models/state';
import GearscoutService from '../Services/GearscoutService';
import { getOfflineMatchesSuccess } from './Actions';
import { AppDispatch } from './Store';

type GetState = () => AppState;
const OFFLINE_REQUEST_LOCATION: string = 'offlineRequests';

export const fetchOfflineRequests = () => async (dispatch: AppDispatch) => {
	const offlineRequests: ICachedMatch[] = readOfflineRequestsFromStorage();
	dispatch(getOfflineMatchesSuccess(offlineRequests));
};

export const saveOfflineRequest = (teamNumber: string, secretCode: string, match: IMatch) => async () => {
	const request: ICachedMatch = {
		...match,
		teamNumber,
		secretCode
	};
	const offlineRequests: ICachedMatch[] = readOfflineRequestsFromStorage();
	offlineRequests.push(request);

	localStorage.setItem(OFFLINE_REQUEST_LOCATION, JSON.stringify(offlineRequests));
};

export const sendOfflineRequests = () => async (dispatch: AppDispatch) => {
	const offlineRequests: ICachedMatch[] = readOfflineRequestsFromStorage();
	localStorage.setItem(OFFLINE_REQUEST_LOCATION, '[]');

	for (const request of offlineRequests) {
		dispatch(submitMatch(request.teamNumber, request.secretCode, request));
	}

	// if (offlineRequests.length === 0) {
	// 	alert('Successfully sent all cached requests');
	// } else {
	// 	alert(`Failed to send ${offlineRequests.length} requests`);
	// }
};

export const submitMatch = (teamNumber: string, secretCode: string, match: IMatch) => async (dispatch: AppDispatch) => {
	sendRequest(teamNumber, secretCode, match)
		.then(result => {
			if (result === 'SUCCESS') {
				alert('Data Submitted!');
				return;
			}

			if (result === 'OFFLINE') {
				dispatch(saveOfflineRequest(teamNumber, secretCode, match));
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

const sendRequest = async (teamNumber: string, secretCode: string, match: IMatch): Promise<'SUCCESS' | 'OFFLINE' | 'FAIL'> => {
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
