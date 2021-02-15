import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Layout from 'styles/layout'
import { cloneDeep } from 'lodash'
import LoginForm from './components/Form'

function Login() {
	const location = useLocation()
	const { pathname } = location
	return (
		<Layout.Wrapper pageName={cloneDeep(pathname).replace('/', '')}>
			<Layout.Container>
				<LoginForm />
			</Layout.Container>
		</Layout.Wrapper>
	)
}
export default Login
