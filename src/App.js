import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
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
					<Route path='/login'>
						<Login />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Container>
		</Wrapper>
	)
}

export default App
