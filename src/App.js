import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import Loadable from '@loadable/component'
import { Global } from '@emotion/core'
import { styles, Theme } from 'styles'

const loading = () => {
	return <div>Loading...</div>
}

const Home = Loadable(() => import('./js/views/home'), {
	loading,
})
const Login = Loadable(() => import('./js/views/login'), {
	loading,
})

function App() {
	return (
		<>
			<Global styles={styles} />
			<ThemeProvider theme={Theme}>
				<Switch>
					<Route strict sensitive path='/login' component={Login} />
					<Route strict sensitive path='/home' component={Home} />
					<Redirect push from='/' to='/home' />
				</Switch>
			</ThemeProvider>
		</>
	)
}

export default App
