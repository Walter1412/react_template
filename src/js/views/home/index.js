import React, { useEffect } from 'react'
import { styled, css, mq } from 'lib/plugins/emotion'
import { Button } from 'components/common'
import { Header, Footer, Form } from 'components/project'

function Home(props) {
	useEffect(() => {})

	return (
		<>
			<Header></Header>
			<main>
				<Form.Input></Form.Input>
				<Button>asdf</Button>
			</main>
			<Footer></Footer>
		</>
	)
}
export default Home
