import React, { useEffect } from 'react'
import { styled, css, mq } from 'lib/plugins/emotion'
import { Button, Form } from 'components/common'
import { Header, Footer } from 'components/project'

function Home(props) {
	useEffect(() => {})

	return (
		<>
			<Header></Header>
			<main>
				<Form.Input></Form.Input>
				<Button
					customizeCSS={props => {
						return mq({
							color: ['green', 'gray', 'hotpink'],
						})
					}}
				>
					asdf
				</Button>
			</main>
			<Footer></Footer>
		</>
	)
}
export default Home
