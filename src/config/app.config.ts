// Application Configuration
export const APP_CONFIG = {
	// Current game year
	CURRENT_YEAR: 2025,
	
	// Match constraints
	MAX_MATCH_NUMBER: 200,
	
	// API endpoints (should be overridden by environment variables in production)
	API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.gearitforward.com',
	
	// Service Worker
	SERVICE_WORKER_ENABLED: true,
	
	// Cache settings
	OFFLINE_REQUEST_LOCATION: 'offlineRequests',
	OFFLINE_SUPER_NOTE_REQUEST_LOCATION: 'offlineSuperNotes',
	
	// UI Settings
	SNACKBAR_AUTO_HIDE_DURATION: 6000,
	
	// App Version
	APP_VERSION: import.meta.env.VITE_APP_VERSION || '2026.0.3',
} as const;

// Validation constraints
export const VALIDATION = {
	MIN_TEAM_NUMBER: 1,
	MAX_TEAM_NUMBER: 99999,
	MIN_ROBOT_NUMBER: 1,
	MAX_ROBOT_NUMBER: 99999,
	MIN_MATCH_NUMBER: 1,
} as const;

// Feature flags
export const FEATURES = {
	ENABLE_ANALYTICS: false,
	ENABLE_ERROR_TRACKING: false,
	ENABLE_OFFLINE_MODE: true,
} as const;
