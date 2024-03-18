import { ICachedMatch } from './models';

export interface AppState {
	cache: {
		matches: ICachedMatch[]
	};
	notes: {
		auto: string, 
        collection: string, 
        shootingPosition: string,
        shootingConsistency: string,
        path: string, 
        defense: string, 
        climbing: string, 
        humanPlayer: string, 
        penalties: string,
        drivers: string,
        other: string
	}
}
