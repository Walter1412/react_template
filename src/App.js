import React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import Loadable from '@loadable/component'
import { cloneDeep } from 'lodash'
import { Wrapper, Container } from './style'

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
	const { pathname } = useLocation()

	return (
		<Wrapper pageName={cloneDeep(pathname).replace('/', '')}>
			<Container>
				<Switch>
					<Route strict sensitive path='/login' component={Login} />
					<Route strict sensitive path='/home' component={Home} />
					<Redirect push from='/' to='/home' />
				</Switch>
			</Container>
		</Wrapper>
	)
}

export default App
