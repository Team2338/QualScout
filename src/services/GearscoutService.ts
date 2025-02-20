import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IMatch, ISuperMatch } from '../models/models';

type GearscoutResponse<T> = Promise<AxiosResponse<T>>;

class GearscoutService {

	private service: AxiosInstance = axios.create({
		baseURL: 'https://gearitforward.com/api/v2/notes'
	});

	submitMatch = (teamNumber: string, secretCode: string, match: IMatch): GearscoutResponse<void> => {
		const url: string = `/team/${teamNumber}`;
		const config: AxiosRequestConfig = {
			headers: {
				secretCode: secretCode
			}
		};

		return this.service.post(url, match, config);
	};
	superScout = (teamNumber: string, secretCode:string, quant: ISuperMatch): GearscoutResponse<void> => {
		const url: string = `/team/${teamNumber}`;
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
