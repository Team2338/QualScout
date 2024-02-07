import { ICachedMatch } from './models';

export interface AppState {
	cache: {
		matches: ICachedMatch[]
	};
	notes: {
		"Auto": string, 
        "Collection": string, 
        "Shooting Position": string,
        "Shooting Consistency": string,
        "Path": string, 
        "Defense": string, 
        "Climbing": string, 
        "Human Player": string, 
        "Penalties": string,
	}
}
