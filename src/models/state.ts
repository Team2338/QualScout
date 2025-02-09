import { ICachedMatch, IUser, Topic } from './models';

export interface IAppState {
	user: IUser;
	cache: {
		matches: ICachedMatch[];
	};
	notes: {
		[key in Topic]: string;
	};
}
