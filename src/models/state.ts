import { ICachedMatch } from './models';

export interface AppState {
	cache: {
		matches: ICachedMatch[]
	};
	notes: {
		"Auto": [], 
        "Collection": [], 
        "Shooting Position": [],
        "Shooting Consistency": [],
        "Path": [], 
        "Defense": [], 
        "Climbing": [], 
        "Human Player": [], 
        "Penalties": [],
	}
}
