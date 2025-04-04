export const CURRENT_YEAR = 2025;

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

export interface ICachedSuperNoteRequest extends ISuperNoteRequest {
	teamNumber: string;
	secretCode: string;
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

export interface IMatchLineup {
	matchNumber: number;
	red1: number;
	red2: number;
	red3: number;
	blue1: number;
	blue2: number;
	blue3: number;
}

export enum Subtopic {
	autoPlacementAccuracy = 'Auto Placement Accuracy',
	pathingDrivers = 'Pathing Drivers',
	coralGroundCollection = 'Coral Ground Collection',
	coralStationCollection = 'Coral Station Collection',
	coralScoring = 'Coral Scoring',
	algaeGroundCollection = 'Algae Ground Collection',
	algaeReefCollection = 'Algae Reef Collection',
	algaeProcessor = 'Algae Processor',
	algaeBarge = 'Algae Barge',
	driverAbility = 'Driver Ability',
	hpAtProcessor = 'HP at Processor',
	hpAtFeeder = 'HP at Feeder',
	climbSkill = 'Climb Skill',
	defenseDriverSkill = 'Driver Defense Skill',
	defenseType = 'Defense Type',
}
