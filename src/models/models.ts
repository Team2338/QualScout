
export enum Gamemodes {
	teleop = 'TELEOP',
	auto = 'AUTO'
}

export interface IMatch {
	eventCode: string;
	matchNumber: string;
	robotNumber: string;
	creator: string;
	allianceColor: string;
	objectives: IObjective[];
}

export interface ICachedMatch extends IMatch {
	teamNumber: string;
	secretCode: string;
}

export interface IObjective {
	gamemode: Gamemodes,
	objective: string;
	count: number;
	list?: number[];
}
