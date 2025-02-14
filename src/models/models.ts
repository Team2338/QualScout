
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

export enum Coral1 {
	a = 'Quick Snag',
	b = 'Align',
	c = 'Cant Pick up'
}

export enum Coral2 {
	a = 'Quick Collection',
	b = 'Align',
	c = 'Drop Piece'
}

export enum Coral3 {
	a = 'Instant Place',
	b = 'Long Lineup',
	c = 'Cant Place'
}

export enum Algae1 {
	a = 'Good Pickup',
	b = 'Pushes it',
	c = 'Cant Pickup'
}

export enum Algae2 {
	a = 'Good Pickup',
	b = 'Long Alignment',
	c = 'Knocks it Down'
}

export enum Algae3 {
	a = 'Instant Place',
	b = 'Long Alignment',
	c = 'No Scoring Mechanism'
}

export enum Algae4 {
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
	a = '<5 second climb',
	b = 'Long or Wobbly Climb',
	c = 'That bot should not be hanging'
}

export enum Defense {
	a = 'Great defense',
	b = 'Not very good',
	c = 'Defense not played'
}

export interface IUser {
	teamNumber: string;
	scouterName: string;
	secretCode: string;
	eventCode: string;
}
