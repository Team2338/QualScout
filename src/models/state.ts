import { ICachedMatch } from './models';

export interface AppState {
	cache: {
		matches: ICachedMatch[]
	};
	teleop: {
		grid: number[];
		chargeStation: number;
	};
	auto: {
		grid: number[];
		park: number;
		chargeStation: number;
	};
}
