import React from 'react';
import {
	ThemeProvider,
	createTheme
} from '@mui/material/styles';
import ReactDOM from 'react-dom';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
export const themeOptions = {
	palette: {
		type: 'dark',
		primary: {
			main: '#FE5000',
			contrastText: '#000000'
		},
		secondary: {
			main: '#BABFB7',
			contrastText: '#000000'
		},
		text: {
			primary: '#BABFB7',
		}
	},
  typography: {
    fontFamily: [
      '"Segoe UI"',
    ].join(','),
  },
};

const theme = createTheme(themeOptions);
ReactDOM.render(
	<Provider store={store}>
	<ThemeProvider theme={theme}>
		<App/>
	</ThemeProvider>
	</Provider>,
	document.getElementById('root')	
);