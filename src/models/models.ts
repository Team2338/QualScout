
export interface IMatch {
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
	topic: string;
	content: string;
}

export enum AllianceColor {
	unknown = 'UNKNOWN',
	red = 'RED',
	blue = 'BLUE'
}
