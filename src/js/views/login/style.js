import styled, { css } from 'react-emotion'
console.log(styled)
export default props => {
	console.log(props)
	const important = css`
		color: hotpink;
	`
	console.log(important)
}