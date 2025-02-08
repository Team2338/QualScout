
export interface IMatch {
	gameYear: number;
	eventCode: string;
	matchNumber: string;
	robotNumber: string;
	creator: string;
	allianceColor: string;
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
	collection = 'Collection',
	shooting = 'Shooting',
	amp = 'Amp',
	path = 'Path',
	defense = 'Defense',
	endgame = 'Endgame',
	humanPlayer = 'Human Player',
	penalties = 'Penalties',
	drivers = 'Drivers',
	other = 'Other'
}
