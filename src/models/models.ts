
export interface IMatch {
	gameYear: number;
	eventCode: string;
	matchNumber: string;
	robotNumber: string;
	creator: string;
	comments: INote[];
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

export enum Auto {
	a = 'Never Miss',
	b = 'Minimal Missed',
	c = 'Many Missed'
}

export enum Pathing {
	a = 'No Collisions',
	b = 'Minimal Collisions',
	c = 'Many Collisions'
}

export enum CoralGroundCollection {
	a = 'Quick Snag',
	b = 'Align',
	c = 'Cant Pick up'
}

export enum CoralStationCollection {
	a = 'Quick Collection',
	b = 'Align',
	c = 'Drop Piece'
}

export enum CoralScoring {
	a = 'Instant Place',
	b = 'Long Lineup',
	c = 'Cant Place'
}

export enum AlgaeGroundCollection {
	a = 'Good Pickup',
	b = 'Pushes it',
	c = 'Cant Pickup'
}

export enum AlgaeReefCollection {
	a = 'Good Pickup',
	b = 'Long Alignment',
	c = 'Knocks it Down'
}

export enum AlgaeProcessor {
	a = 'Instant Place',
	b = 'Long Alignment',
	c = 'No Scoring Mechanism'
}

export enum AlgaeBarge {
	a = 'Instant Score',
	b = 'Needs to Lineup',
	c = 'Cant Score'
}

export enum Drivers {
	a = 'Smooth Operator',
	b = 'Slow Decisions',
	c = 'Lack of Drive'
}

export enum HumanP {
	a = 'Micheal Jordan',
	b = 'Middle',
	c = 'Not at Processor'
}

export enum Climb {
	a = 'Fast or Sturdy Climb',
	b = 'Long or Wobbly Climb',
	c = 'That Bot Should Not be Hanging'
}

export enum DefenseSkill {
	a = 'Great defense',
	b = 'Not very good',
	c = 'Defense not played'
}

export enum DefenseType {
	a = 'Zone Defense',
	b = 'Targeted Defense',
	c = 'No Defense'
}

export interface IUser {
	teamNumber: string;
	scouterName: string;
	secretCode: string;
	eventCode: string;
}
