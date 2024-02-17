import { ICachedMatch } from './models';

export interface AppState {
	cache: {
		matches: ICachedMatch[]
	};
	notes: {
		Auto: string, 
        Collection: string, 
        ShootingPosition: string,
        ShootingConsistency: string,
        Path: string, 
        Defense: string, 
        Climbing: string, 
        HumanPlayer: string, 
        Penalties: string,
        Drivers: string
	}
}
