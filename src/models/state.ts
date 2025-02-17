import { ICachedMatch, IUser, Topic, Drop } from './models';

export interface IAppState {
	user: IUser;
	cache: {
		matches: ICachedMatch[];
	};
	notes: {
		[key in Topic]: string;
	};
	dropdown: {
		[key in Drop]: string;
	}
}
