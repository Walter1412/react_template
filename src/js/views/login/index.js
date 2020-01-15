import React from 'react'
import LoginForm from './components/Form'
import { jsx, css } from '@emotion/core'
const base = css`
	color: hotpink;
`

function Login() {
	return (
		<>
			<LoginForm />
			<div css={base}>sdffasfasf</div>
		</>
	)
}
export default Login
