export const ActionTypes = {
	RESET_STATE: '[GLOBAL] Reset state',
	ACTIVATE_AUTO_NODE: '[GRID] Activate auto node',
	ACTIVATE_TELEOP_NODE: '[GRID] Activate teleop node',
	DEACTIVATE_NODE: '[GRID] Deactivate auto node',
	SET_AUTO_PARK: '[PARK] Set auto park',
	SET_AUTO_CHARGE_STATION: '[CHARGE] Set auto charge station',
	SET_TELEOP_CHARGE_STATION: '[CHARGE] Set teleop charge station',
	GET_OFFLINE_MATCHES_SUCCESS: '[CACHE] Successfully got offline matches',
	CLEAR_OFFLINE_MATCHES: '[CACHE] Clear matches'
};


export const resetState = () => {
	return {
		type: ActionTypes.RESET_STATE
	};
};

export const getOfflineMatchesSuccess = (matches) => {
	return {
		type: ActionTypes.GET_OFFLINE_MATCHES_SUCCESS,
		payload: matches
	};
};

export const clearOfflineMatches = () => {
	return {
		type: ActionTypes.CLEAR_OFFLINE_MATCHES,
	};
};

export const activateNode = (gamemode, index) => {
	const type = (gamemode === 'teleop') ? ActionTypes.ACTIVATE_TELEOP_NODE : ActionTypes.ACTIVATE_AUTO_NODE;
	return {
		type: type,
		payload: index
	};
};

export const setAutoPark = (value) => {
	return {
		type: ActionTypes.SET_AUTO_PARK,
		payload: value
	};
};

export const setChargeStation = (gamemode, value) => {
	return {
		type: (gamemode === 'teleop') ? ActionTypes.SET_TELEOP_CHARGE_STATION : ActionTypes.SET_AUTO_CHARGE_STATION,
		payload: value
	};
};
