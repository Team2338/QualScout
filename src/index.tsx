import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './state/Store';
import './index.scss';

const GRAY = '#BABFB7';

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
