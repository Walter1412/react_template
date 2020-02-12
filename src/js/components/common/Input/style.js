import { styled, css } from 'lib/plugins/emotion'

export default props => {
	return {
		Input: styled('input')`
			label: Input;
			color: blue;
			${props => {
				const { customizeCSS } = props
				return customizeCSS
			}}
		`,
	}
}
