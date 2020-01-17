import React from 'react'
import { Switch, Route, Redirect, useLocation } from 'react-router-dom'
import { cloneDeep } from 'lodash'
import { Wrapper, Container } from './style'
import Home from './js/views/home'
import Login from './js/views/login'

function App() {
	const { pathname } = useLocation()

	return (
		<Wrapper pageName={cloneDeep(pathname).replace('/', '')}>
			<Container>
				<Switch>
					<Route strict sensitive path='/login'>
						<Login />
					</Route>
					<Route strict sensitive path='/home'>
						<Home />
					</Route>
					<Redirect push from='/' to='/home' />
				</Switch>
			</Container>
		</Wrapper>
	)
}

export default App
