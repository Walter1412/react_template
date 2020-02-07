import { styled, css, mq } from 'lib/plugins/emotion'

export default props => {
	const { href } = props
	const elementType = typeof href === 'string' ? 'a' : 'button'
	return {
		Button: styled(elementType)`
			label: Button;
			color: blue;
			${props => {
				const { color } = props
				return css`
					color: ${color};
				`
			}};
		`,
	}
}
