import { ICachedMatch, IUser, Topic, ISuperMatch } from './models';

export interface IAppState {
	user: IUser;
	cache: {
		matches: ICachedMatch[];
	};
	notes: {
		[key in Topic]: string;
	};
	drop: ISuperMatch;
}
