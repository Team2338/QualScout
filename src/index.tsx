import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './state/Store';
import './index.scss';
import { register } from './ServiceWorkerRegistration';
import { serviceWorkerInstalled } from './state/Actions';
import { outlinedInputClasses } from '@mui/material';

const GRAY = '#BABFB7';
const ORANGE = '#FE5000';
const ORANGE_HOVER = '#FE5000DD';

export const themeOptions = {
	palette: {
		type: 'dark',
		primary: {
			main: '#FE5000DD',
			contrastText: '#000000'
		},
		secondary: {
			main: GRAY,
			contrastText: '#000000'
		},
		text: {
			primary: GRAY,
		},
	},

	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					['text-transform']: 'capitalize',
				}
			}
		},
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					borderColor: GRAY
				},
				root: {
					[`&:hover .${outlinedInputClasses.notchedOutline}`]: {
						borderColor: ORANGE_HOVER
					},
					[`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
						borderColor: ORANGE
					},
					[`&.Mui-disabled .${outlinedInputClasses.notchedOutline}`]: {
						borderColor: GRAY,
						opacity: 0.6
					}
				}
			}
		},
		MuiInputLabel: {
			styleOverrides: {
				root: {
					color: GRAY
				}
			}
		},
		MuiFormHelperText: {
			styleOverrides: {
				root: {
					['text-align']: 'right'
				}
			}
		},
		MuiSelect: {
			styleOverrides: {
				root: {
					color: GRAY,
					['text-align']: 'left'
				},
				icon: {
					color: GRAY,
					'&.Mui-disabled': {
						color: GRAY
					}
				}
			}
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					color: '#000000'
				}
			}
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					'&.Mui-focused': {
						color: ORANGE
					}
				}
			}
		}
	}
};

const theme = createTheme(themeOptions);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<Provider store={ store }>
		<ThemeProvider theme={ theme }>
			<App />
		</ThemeProvider>
	</Provider>
);

register({
	onUpdate: sw => store.dispatch(serviceWorkerInstalled(sw)),
	onSuccess: () => {
		window.location.reload();
	}
});
