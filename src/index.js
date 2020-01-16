import React from 'react'
import ReactDOM from 'react-dom'
import { Global } from '@emotion/core'
import { BrowserRouter } from 'react-router-dom'
import { styles } from './style'
import App from './App'

ReactDOM.render(
	<>
		<Global styles={styles} />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</>,
	document.getElementById('root')
)
