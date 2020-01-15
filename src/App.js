import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { cloneDeep } from 'lodash'
import { Wrapper } from './style'
import Home from './js/views/home'
import Login from './js/views/login'
import About from './js/views/about'
import Hook from './js/views/hook'

function App() {
	const { pathname } = useLocation()

	return (
		<Wrapper pageName={cloneDeep(pathname).replace('/', '')}>
			<Switch>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/hook'>
					<Hook />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</Wrapper>
	)
}

export default App
