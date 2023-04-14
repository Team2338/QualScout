import { ICachedMatch } from './models';

export interface AppState {
	cache: {
		matches: ICachedMatch[]
	};
	teleop: {
		grid: NodeState[];
		chargeStation: number;
	};
	auto: {
		grid: NodeState[];
		park: number;
		chargeStation: number;
	};
}

export interface NodeState {
	disabled: boolean;
	value: number;
}
