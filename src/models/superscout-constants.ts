import { ISuperMatch, Subtopic } from './models';

export const AutoShootingAccuracy: ISuperMatch[] = [
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

export const GroundCollection: ISuperMatch[] = [
	{
		key: 'QUICK_SNAG',
		name: 'Quick collect',
		score: 2
	},
	{
		key: 'ALIGN',
		name: 'Adjustment necessary',
		score: 1
	},
	{
		key: 'DROP_PIECE',
		name: 'Pushes out of way',
		score: 0
	}
];

export const HopperFullness: ISuperMatch[] = [
	{
		key: '100',
		name: '100%',
		score: 100
	},
	{
		key: '75',
		name: '75%',
		score: 75
	},
	{
		key: '50',
		name: '50%',
		score: 50
	},
	{
		key: '25',
		name: '25%',
		score: 25
	},
]

export const ScoringAccuracy: ISuperMatch[] = [
	{
		key: 'INSTANT_PLACE',
		name: 'Never miss',
		score: 2
	},
	{
		key: 'LONG_LINEUP',
		name: 'Sometimes miss',
		score: 1
	},
	{
		key: 'CANNOT_PLACE',
		name: 'Frequently miss',
		score: 0
	}
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

export const YesNo: ISuperMatch[] = [
	{
		key: 'YES',
		name: 'Yes',
		score: 1
	},
	{
		key: 'NO',
		name: 'No',
		score: 0
	},
];

export const ClimbStability: ISuperMatch[] = [
	{
		key: 'STURDY',
		name: 'Sturdy climb',
		score: 2
	},
	{
		key: 'WEAK',
		name: 'Weak climb',
		score: 1
	},
	{
		key: 'SHOULD_NOT_CLIMB',
		name: 'Should not climb',
		score: 0
	},
]

export const ClimbSpeed: ISuperMatch[] = [
	{
		key: 'FAST',
		name: 'Fast',
		score: 2
	},
	{
		key: 'MODERATE',
		name: 'Moderate',
		score: 1
	},
	{
		key: 'SLOW',
		name: 'Slow',
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
		key: 'MODERATE',
		name: 'Moderate',
		score: 1
	},
	{
		key: 'POOR_DEFENSE',
		name: 'Poor defense',
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
	[Subtopic.autoShootingAccuracy]: AutoShootingAccuracy,
	[Subtopic.pathingDrivers]: DriverPathing,
	[Subtopic.groundCollection]: GroundCollection,
	[Subtopic.hopperFullness]: HopperFullness,
	[Subtopic.scoringAccuracy]: ScoringAccuracy,
	[Subtopic.driverAbility]: DriverAbility,
	[Subtopic.didSurf]: YesNo,
	[Subtopic.climbStability]: ClimbStability,
	[Subtopic.climbSpeed]: ClimbSpeed,
	[Subtopic.defenseDriverSkill]: DefenseDriverSkill,
	[Subtopic.defenseType]: DefenseType
};
