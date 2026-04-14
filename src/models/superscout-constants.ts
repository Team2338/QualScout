import { ISuperMatch, Subtopic } from './models';

export const DriverPathing: ISuperMatch[] = [
	{
		key: 'NO_COLLISIONS',
		name: 'No collisions',
		score: 4
	},
	{
		key: 'MINIMAL_COLLISIONS',
		name: 'Minimal collisions',
		score: 3
	},
	{
		key: 'MODERATE_COLLISIONS',
		name: 'Moderate collisions',
		score: 2
	},
	{
		key: 'MANY_COLLISIONS',
		name: 'Many collisions',
		score: 1
	},
	{
		key: 'WRECKING_BALL',
		name: 'Wrecking ball',
		score: 0
	}
];

export const GroundCollection: ISuperMatch[] = [
	{
		key: 'TOUCH_IT_OWN_IT',
		name: 'Touch it, own it',
		score: 4
	},
	{
		key: 'QUICK_INTAKE',
		name: 'Quickly intakes',
		score: 3
	},
	{
		key: 'ALIGN',
		name: 'Adjustment necessary',
		score: 2
	},
	{
		key: 'SOME',
		name: 'Gets some fuel',
		score: 1
	},
	{
		key: 'TRIES_FAILS',
		name: 'Tries but fails',
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
	{
		key: '0',
		name: '0%',
		score: 0
	},
];

export const DriverAbility: ISuperMatch[] = [
	{
		key: 'SMOOTH_OPERATOR',
		name: 'Smooth operator',
		score: 4
	},
	{
		key: 'SOMETIMES_HICCUPS',
		name: 'Sometimes hiccups',
		score: 3
	},
	{
		key: 'SLOW_DECISIONS',
		name: 'Slow decisions',
		score: 2
	},
	{
		key: 'SIGNS_OF_LIFE',
		name: 'Some movement',
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
		score: 4
	},
	{
		key: 'WEAK',
		name: 'Weak climb',
		score: 2
	},
	{
		key: 'SHOULD_NOT_CLIMB',
		name: 'Should not climb',
		score: 0
	},
];

export const ClimbSpeed: ISuperMatch[] = [
	{
		key: 'FAST',
		name: 'Fast',
		score: 4
	},
	{
		key: 'MODERATE',
		name: 'Moderate',
		score: 2
	},
	{
		key: 'SLOW',
		name: 'Slow',
		score: 0
	},
];

export const DefenseDriverSkill: ISuperMatch[] = [
	{
		key: 'TOTAL_SHUTDOWN',
		name: 'Total shutdown',
		score: 4
	},
	{
		key: 'MODERATE_EFFECT',
		name: 'Moderately effective',
		score: 3
	},
	{
		key: 'TINY_EFFECT',
		name: 'Had /some/ effect...',
		score: 2
	},
	{
		key: 'INEFFECTIVE',
		name: 'Completely ineffective',
		score: 1
	},
	{
		key: 'ACTIVELY_HARMFUL',
		name: 'Actively harmful',
		score: 0
	},
];

export const PassingSkill: ISuperMatch[] = [
	{
		key: 'SIGNIFICANT_VALUE',
		name: 'Significant value',
		score: 4
	},
	{
		key: 'SOMEWHAT_VALUABLE',
		name: 'Somewhat valuable',
		score: 3
	},
	{
		key: 'Neutral ability',
		name: 'Neutral ability',
		score: 2
	},
	{
		key: 'RANDOM',
		name: 'Random shots',
		score: 1
	},
	{
		key: 'ACTIVELY_HARMFUL',
		name: 'Actively harmful',
		score: 0
	},
]


type ISubtopicToOptionMap = Record<Subtopic, ISuperMatch[]>;
export const SubtopicToOptionMap: ISubtopicToOptionMap = {
	[Subtopic.pathingDrivers]: DriverPathing,
	[Subtopic.groundCollection]: GroundCollection,
	[Subtopic.hopperFullness]: HopperFullness,
	[Subtopic.driverAbility]: DriverAbility,
	[Subtopic.climbStability]: ClimbStability,
	[Subtopic.climbSpeed]: ClimbSpeed,
	[Subtopic.defenseDriverSkill]: DefenseDriverSkill,
	[Subtopic.passingSkill]: PassingSkill
};
