import { ICachedMatch, IUser, Topic, Subtopic, ICachedSuperNoteRequest } from './models';

export interface IAppState {
	user: IUser;
	cache: {
		matches: ICachedMatch[];
		superNotes: ICachedSuperNoteRequest[];
	};
	notes: {
		[key in Topic]: string;
	};
	superNotes: Record<Subtopic, string>; // subtopic -> key
}
