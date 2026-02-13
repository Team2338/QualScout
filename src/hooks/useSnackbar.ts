import { useState, useCallback } from 'react';
import { SnackbarSeverity } from '../components/common/Snackbar';

interface SnackbarState {
	open: boolean;
	message: string;
	severity: SnackbarSeverity;
}

export function useSnackbar() {
	const [snackbar, setSnackbar] = useState<SnackbarState>({
		open: false,
		message: '',
		severity: 'info'
	});

	const showSnackbar = useCallback((message: string, severity: SnackbarSeverity = 'info') => {
		setSnackbar({ open: true, message, severity });
	}, []);

	const hideSnackbar = useCallback(() => {
		setSnackbar(prev => ({ ...prev, open: false }));
	}, []);

	return {
		snackbar,
		showSnackbar,
		hideSnackbar,
		showSuccess: useCallback((msg: string) => showSnackbar(msg, 'success'), [showSnackbar]),
		showError: useCallback((msg: string) => showSnackbar(msg, 'error'), [showSnackbar]),
		showWarning: useCallback((msg: string) => showSnackbar(msg, 'warning'), [showSnackbar]),
		showInfo: useCallback((msg: string) => showSnackbar(msg, 'info'), [showSnackbar])
	};
}
