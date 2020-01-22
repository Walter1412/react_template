import React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { ThemeProvider } from 'emotion-theming'
import Loadable from '@loadable/component'
import { cloneDeep } from 'lodash'
import { Wrapper, Container } from './styles'

const loading = () => {
	return <div>Loading...</div>
}

const theme = {
	colors: {
		primary: 'hotpink',
	},
}

const Home = Loadable(() => import('./js/views/home'), {
	loading,
})
const Login = Loadable(() => import('./js/views/login'), {
	loading,
})

function App() {
	const { pathname } = useLocation()

	return (
		<ThemeProvider theme={theme}>
			<Wrapper pageName={cloneDeep(pathname).replace('/', '')}>
				<Container>
					<Switch>
						<Route strict sensitive path='/login' component={Login} />
						<Route strict sensitive path='/home' component={Home} />
						<Redirect push from='/' to='/home' />
					</Switch>
				</Container>
			</Wrapper>
		</ThemeProvider>
	)
}

export default App
