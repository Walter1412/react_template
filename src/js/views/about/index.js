import React from 'react'
import { loader, gql } from 'graphql.macro'
import styles from './style.module.scss'
const query = loader('../../constants/test.graphql')
const query1 = gql`
	query User {
		user(id: 5) {
			lastName
			...UserEntry1
		}
	}
`
console.log(query)
console.log(query1)
function About() {
	return (
		<div>
			<h1 className={styles.error}>Hello About</h1>
		</div>
	)
}
export default About
