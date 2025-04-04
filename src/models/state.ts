import { ICachedMatch, IUser, Topic, Subtopic, ICachedSuperNoteRequest, IMatchLineup } from './models';

export enum LoadStatus {
	none, loading, success, fail
}

export interface IAppState {
	user: IUser;
	serviceWorker: {
		updated: boolean;
		sw: ServiceWorker | null;
	};
	schedule: {
		loadStatus: LoadStatus;
		data: IMatchLineup[];
	};
	cache: {
		matches: ICachedMatch[];
		superNotes: ICachedSuperNoteRequest[];
	};
	notes: {
		[key in Topic]: string;
	};
	superNotes: Record<Subtopic, string>; // subtopic -> key
}
