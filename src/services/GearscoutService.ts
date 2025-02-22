import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IMatch, ISuperNoteRequest } from '../models/models';

type GearscoutResponse<T> = Promise<AxiosResponse<T>>;

class GearscoutService {

	private service: AxiosInstance = axios.create({
		baseURL: 'https://gearitforward.com/api'
	});

	submitMatch = (teamNumber: string, secretCode: string, match: IMatch): GearscoutResponse<void> => {
		const url: string = `/v2/notes/team/${teamNumber}`;
		const config: AxiosRequestConfig = {
			headers: {
				secretCode: secretCode
			}
		};

		return this.service.post(url, match, config);
	};

	superScout = (teamNumber: string, secretCode: string, quant: ISuperNoteRequest): GearscoutResponse<void> => {
		const url: string = `/v1/team/${teamNumber}`;
		const config: AxiosRequestConfig = {
			headers: {
				secretCode: secretCode
			}
		};

		return this.service.post(url, quant, config);
	};
}

const service: GearscoutService = new GearscoutService();
export default service;