export interface IMatch {
	gameYear: number;
	eventCode: string;
	matchNumber: string;
	robotNumber: string;
	creator: string;
	comments: INote[];
}

export interface ISuperNoteRequest {
	gameYear: number;
	eventCode: string;
	matchNumber: string;
	robotNumber: string;
	creator: string;
	objectives: IObjective[];
}

export interface IObjective {
	gamemode: Gamemode,
	objective: string;
	count: number;
	list?: number[];
}

export enum Gamemode {
	superscout = 'SUPERSCOUT'
}

export interface ISuperMatch {
	key: string; // "objective" in HTTP request; this is the translation key
	name: string; // What appears in the UI
	score: number; // "count" in HTTP request
}

export interface ICachedMatch extends IMatch {
	teamNumber: string;
	secretCode: string;
}

export interface INote {
	topic: Topic;
	content: string;
}

export enum AllianceColor {
	unknown = 'UNKNOWN',
	red = 'RED',
	blue = 'BLUE'
}

export enum Topic {
	auto = 'Auto',
	pathing = 'Pathing',
	coral = 'Coral',
	algae = 'Algae',
	drivers = 'Drivers',
	hp = 'Human Player',
	penalties = 'Penalties',
	climb = 'Climb',
	defense = 'Defense',
	other = 'Other'
}

export interface IUser {
	teamNumber: string;
	scouterName: string;
	secretCode: string;
	eventCode: string;
}

export enum Drop {
	AutoPlacementAccuracy = 'AutoPlacementAccuracy',
	PathingDrivers = 'PathingDrivers',
	CoralGroundCollection = 'CoralGroundCollection',
	CoralStationCollection = 'CoralStationCollection',
	CoralScoring = 'CoralScoring',
	AlgaeGroundCollection = 'AlgaeGroundCollection',
	AlgaeReefCollection = 'AlgaeReefCollection',
	AlgaeProcessor = 'AlgaeProcessor',
	AlgaeBarge = 'AlgaeBarge',
	DriverAbility = 'DriverAbility',
	HPAtProcessor = 'HPAtProcessor',
	ClimbSkill = 'ClimbSkill',
	DefenseDriverSkill = 'DefenseDriverSkill',
	DefenseType = 'DefenseType',
}
