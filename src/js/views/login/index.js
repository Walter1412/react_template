import React, { useState } from 'react'
import LoginForm from './components/Form'
import { Example } from './style'

function Login() {
	return (
		<>
			<LoginForm />
			<Example color='red'>
				<a>qweqwe</a>
			</Example>
		</>
	)
}
export default Login
