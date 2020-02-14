import { styled, css } from 'lib/plugins/emotion'

export default props => {
	return {
		Template: styled('div')`
			label: Template;
			${props => {
				const { customizeCSS } = props
				return customizeCSS
			}}
		`,
	}
}
