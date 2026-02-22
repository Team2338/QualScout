import { ISuperMatch, Subtopic } from './models';

export const AutoScoringAccuracy: ISuperMatch[] = [
	{
		key: 'NEVER_MISSED',
		name: 'Highly accurate',
		score: 2
	},
	{
		key: 'MINIMAL_MISSED',
		name: 'Mostly accurate',
		score: 1
	},
	{
		key: 'MANY_MISSED',
		name: 'Frequently inaccurate',
		score: 0
	}
];

export const DriverPathing: ISuperMatch[] = [
	{
		key: 'NO_COLLISIONS',
		name: 'Clean navigation',
		score: 2
	},
	{
		key: 'MINIMAL_COLLISIONS',
		name: 'Occasional contact',
		score: 1
	},
	{
		key: 'MANY_COLLISIONS',
		name: 'Frequent collisions',
		score: 0
	}
];

export const GroundCollection: ISuperMatch[] = [
	{
		key: 'QUICK_SNAG',
		name: 'Rapid pickup',
		score: 2
	},
	{
		key: 'ALIGN',
		name: 'Requires alignment',
		score: 1
	},
	{
		key: 'DROP_PIECE',
		name: 'Frequently drops',
		score: 0
	}
];

export const StationCollection: ISuperMatch[] = [
	{
		key: 'QUICK_COLLECTION',
		name: 'Efficient collection',
		score: 2
	},
	{
		key: 'ALIGN',
		name: 'Requires alignment',
		score: 1
	},
	{
		key: 'DROP_PIECE',
		name: 'Frequently drops',
		score: 0
	}
];

export const Scoring: ISuperMatch[] = [
	{
		key: 'INSTANT_PLACE',
		name: 'Quick Shots',
		score: 2
	},
	{
		key: 'LONG_LINEUP',
		name: 'Slow alignment',
		score: 1
	},
	{
		key: 'CANNOT_PLACE',
		name: 'Unable to score',
		score: 0
	}
];

export const OtherGroundCollection: ISuperMatch[] = [
	{
		key: 'GOOD_PICK_UP',
		name: 'Reliable pickup',
		score: 2
	},
	{
		key: 'PUSHES_IT', // TODO: Rename to match text
		name: 'Requires multiple attempts',
		score: 1
	},
	{
		key: 'CANNOT_PICK_IT_UP',
		name: 'Unable to pickup',
		score: 0
	},
];

export const DriverAbility: ISuperMatch[] = [
	{
		key: 'SMOOTH_OPERATOR',
		name: 'Highly skilled',
		score: 2
	},
	{
		key: 'SLOW_DECISIONS',
		name: 'Hesitant operation',
		score: 1
	},
	{
		key: 'LACK_OF_DRIVE',
		name: 'Limited aggressiveness',
		score: 0
	},
];

export const HpAtProcessor: ISuperMatch[] = [
	{
		key: 'MICHAEL_JORDAN', // Might keep this as an Easter egg
		name: 'Highly accurate',
		score: 2
	},
	{
		key: 'MEDIOCRE', // TODO: Rename to match text
		name: 'Moderately accurate',
		score: 1
	},
	{
		key: 'NOT_AT_PROCESSOR', // TODO: Rename to match text
		name: 'Frequently inaccurate',
		score: 0
	},
];

export const HpAtFeeder: ISuperMatch[] = [
	{
		key: 'INSTANT_FEEDER',
		name: 'Quick feeding',
		score: 2
	},
	{
		key: 'SLOW_OR_HESITANT',
		name: 'Slow feeding',
		score: 1
	},
	{
		key: 'MISSES_ROBOT',
		name: 'Inaccurate feeding',
		score: 0
	}
];

export const ClimbSkill: ISuperMatch[] = [
	{
		key: 'FAST_OR_STURDY_CLIMB',
		name: 'Strong climb performance',
		score: 2
	},
	{
		key: 'SLOW_OR_WOBBLY_CLIMB',
		name: 'Unstable climb',
		score: 1
	},
	{
		key: 'THAT_BOT_SHOULD_NOT_BE_HANGING',
		name: 'Should avoid climbing',
		score: 0
	},
];

export const DefenseDriverSkill: ISuperMatch[] = [
	{
		key: 'EFFECTIVE_DEFENSE',
		name: 'Highly effective',
		score: 2
	},
	{
		key: 'NOT_VERY_GOOD',
		name: 'Minimally effective',
		score: 1
	},
	{
		key: 'DEFENSE_NOT_PLAYED',
		name: 'No defense played',
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
		name: 'No defense played',
		score: 0
	},
];

type ISubtopicToOptionMap = Record<Subtopic, ISuperMatch[]>;
export const SubtopicToOptionMap: ISubtopicToOptionMap = {
	[Subtopic.autoPlacementAccuracy]: AutoScoringAccuracy,
	[Subtopic.pathingDrivers]: DriverPathing,
	[Subtopic.groundCollection]: GroundCollection,
	[Subtopic.stationCollection]: StationCollection,
	[Subtopic.scoring]: Scoring,
	[Subtopic.driverAbility]: DriverAbility,
	[Subtopic.hpAtProcessor]: HpAtProcessor,
	[Subtopic.hpAtFeeder]: HpAtFeeder,
	[Subtopic.climbSkill]: ClimbSkill,
	[Subtopic.defenseDriverSkill]: DefenseDriverSkill,
	[Subtopic.defenseType]: DefenseType
};
