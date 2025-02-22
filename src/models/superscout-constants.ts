import { ISuperMatch, Subtopic } from './models';

export const AutoPlacementAccuracy: ISuperMatch[] = [
	{
		key: 'NEVER_MISSED',
		name: 'Never miss',
		score: 2
	},
	{
		key: 'MINIMAL_MISSED',
		name: 'Minimal missed',
		score: 1
	},
	{
		key: 'MANY_MISSED',
		name: 'Many missed',
		score: 0
	}
];

export const DriverPathing: ISuperMatch[] = [
	{
		key: 'NO_COLLISIONS',
		name: 'No collisions',
		score: 2
	},
	{
		key: 'MINIMAL_COLLISIONS',
		name: 'Minimal collisions',
		score: 1
	},
	{
		key: 'MANY_COLLISIONS',
		name: 'Many collisions',
		score: 0
	}
];

export const CoralGroundCollection: ISuperMatch[] = [
	{
		key: 'QUICK_SNAG',
		name: 'Quick snag',
		score: 2
	},
	{
		key: 'ALIGN',
		name: 'Align',
		score: 1
	},
	{
		key: 'DROP_PIECE',
		name: 'Drop piece',
		score: 0
	}
];

export const CoralStationCollection: ISuperMatch[] = [
	{
		key: 'QUICK_COLLECTION',
		name: 'Quick collection',
		score: 2
	},
	{
		key: 'ALIGN',
		name: 'Align',
		score: 1
	},
	{
		key: 'DROP_PIECE',
		name: 'Drop piece',
		score: 0
	}
];

export const CoralScoring: ISuperMatch[] = [
	{
		key: 'INSTANT_PLACE',
		name: 'Instant place',
		score: 2
	},
	{
		key: 'LONG_LINEUP',
		name: 'Long lineup',
		score: 1
	},
	{
		key: 'CANNOT_PLACE',
		name: 'Cannot place',
		score: 0
	}
];

export const AlgaeGroundCollection: ISuperMatch[] = [
	{
		key: 'GOOD_PICK_UP',
		name: 'Good pick up',
		score: 2
	},
	{
		key: 'PUSHES_IT',
		name: 'Pushes it',
		score: 1
	},
	{
		key: 'CANNOT_PICK_IT_UP',
		name: 'Cannot pick it up',
		score: 0
	},
];

export const AlgaeReefCollection: ISuperMatch[] = [
	{
		key: 'GOOD_PICK_UP',
		name: 'Good pick up',
		score: 2
	},
	{
		key: 'LONG_ALIGNMENT',
		name: 'Long alignment',
		score: 1
	},
	{
		key: 'KNOCKS_IT_DOWN',
		name: 'Knocks it down',
		score: 0
	},
];

export const AlgaeProcessor: ISuperMatch[] = [
	{
		key: 'INSTANT_PLACEMENT',
		name: 'Instant placement',
		score: 2
	},
	{
		key: 'LONG_ALIGNMENT',
		name: 'Long alignment',
		score: 1
	},
	{
		key: 'NO_MECHANISM_TO_SCORE',
		name: 'No mechanism to score',
		score: 0
	},
];

export const AlgaeBarge: ISuperMatch[] = [
	{
		key: 'INSTANT_SCORE',
		name: 'Instant score',
		score: 2
	},
	{
		key: 'NEEDS_TO_LINE_UP',
		name: 'Needs to line up',
		score: 1
	},
	{
		key: 'CANNOT_SCORE',
		name: 'Cannot score',
		score: 0
	},
];

export const DriverAbility: ISuperMatch[] = [
	{
		key: 'SMOOTH_OPERATOR',
		name: 'Smooth operator',
		score: 2
	},
	{
		key: 'SLOW_DECISIONS',
		name: 'Slow decisions',
		score: 1
	},
	{
		key: 'LACK_OF_DRIVE',
		name: 'Lack of drive',
		score: 0
	},
];

export const HpAtProcessor: ISuperMatch[] = [
	{
		key: 'MICHAEL_JORDAN',
		name: Math.random() < 0.05 ? 'KOBE' : 'MICHAEL JORDAN',
		score: 2
	},
	{
		key: 'MEDIOCRE',
		name: 'Mediocre',
		score: 1
	},
	{
		key: 'NOT_AT_PROCESSOR',
		name: 'Not at processor',
		score: 0
	},
];

export const ClimbSkill: ISuperMatch[] = [
	{
		key: 'FAST_OR_STURDY_CLIMB',
		name: 'Fast or sturdy climb',
		score: 2
	},
	{
		key: 'SLOW_OR_WOBBLY_CLIMB',
		name: 'Slow or wobbly climb',
		score: 1
	},
	{
		key: 'THAT_BOT_SHOULD_NOT_BE_HANGING',
		name: 'That bot should not be hanging',
		score: 0
	},
];

export const DefenseDriverSkill: ISuperMatch[] = [
	{
		key: 'EFFECTIVE_DEFENSE',
		name: 'Effective defense',
		score: 2
	},
	{
		key: 'NOT_VERY_GOOD',
		name: 'Not very good',
		score: 1
	},
	{
		key: 'DEFENSE_NOT_PLAYED',
		name: 'Defense not played',
		score: 0
	},
];

export const DefenseType: ISuperMatch[] = [
	{
		key: 'ZONE_DEFENSE',
		name: 'Zone defense',
		score: 1
	},
	{
		key: 'TARGETED_DEFENSE',
		name: 'Targeted defense',
		score: -1
	},
	{
		key: 'NO_DEFENSE',
		name: 'No Defense',
		score: 0
	},
];

type ISubtopicToOptionMap = Record<Subtopic, ISuperMatch[]>;
export const SubtopicToOptionMap: ISubtopicToOptionMap = {
	[Subtopic.autoPlacementAccuracy]: AutoPlacementAccuracy,
	[Subtopic.pathingDrivers]: DriverPathing,
	[Subtopic.coralGroundCollection]: CoralGroundCollection,
	[Subtopic.coralStationCollection]: CoralStationCollection,
	[Subtopic.coralScoring]: CoralScoring,
	[Subtopic.algaeGroundCollection]: AlgaeGroundCollection,
	[Subtopic.algaeReefCollection]: AlgaeReefCollection,
	[Subtopic.algaeProcessor]: AlgaeProcessor,
	[Subtopic.algaeBarge]: AlgaeBarge,
	[Subtopic.driverAbility]: DriverAbility,
	[Subtopic.hpAtProcessor]: HpAtProcessor,
	[Subtopic.climbSkill]: ClimbSkill,
	[Subtopic.defenseDriverSkill]: DefenseDriverSkill,
	[Subtopic.defenseType]: DefenseType
}
