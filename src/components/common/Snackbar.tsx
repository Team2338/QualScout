import React from 'react';
import { Alert, Snackbar as MuiSnackbar } from '@mui/material';

export type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

interface SnackbarProps {
	open: boolean;
	message: string;
	severity: SnackbarSeverity;
	onClose: () => void;
	autoHideDuration?: number;
}

export default function Snackbar({
	open,
	message,
	severity,
	onClose,
	autoHideDuration = 6000
}: SnackbarProps) {
	return (
		<MuiSnackbar
			open={open}
			autoHideDuration={autoHideDuration}
			onClose={onClose}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
		>
			<Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</MuiSnackbar>
	);
}
