import React from 'react'
import ReactDOM from 'react-dom'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import { BrowserRouter } from 'react-router-dom'
import { Theme, styles } from './styles'
import App from './App'

ReactDOM.render(
	<>
		<Global styles={styles} />
		<ThemeProvider theme={Theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</>,
	document.getElementById('root')
)
