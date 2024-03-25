import { ICachedMatch } from './models';

export interface AppState {
	cache: {
		matches: ICachedMatch[]
	};
	notes: {
		auto: string, 
        collection: string, 
        shooting: string,
        amp: string,
        path: string, 
        defense: string, 
        endgame: string, 
        humanPlayer: string, 
        penalties: string,
        drivers: string,
        other: string
	}
}
