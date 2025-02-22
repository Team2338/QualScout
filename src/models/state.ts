import { ICachedMatch, IUser, Topic, ISuperMatch, Subtopic } from './models';

export interface IAppState {
	user: IUser;
	cache: {
		matches: ICachedMatch[];
	};
	notes: {
		[key in Topic]: string;
	};
	superNotes: Record<Subtopic, string>; // subtopic -> key
}
