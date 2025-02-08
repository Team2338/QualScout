import { ICachedMatch, Topic } from './models';

export interface IAppState {
	cache: {
		matches: ICachedMatch[];
	};
	notes: {
		[key in Topic]: string;
	};
}
