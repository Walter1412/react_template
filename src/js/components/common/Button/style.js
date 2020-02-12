import { styled, css } from 'lib/plugins/emotion'
import { useTheme } from 'emotion-theming'

export default props => {
	const themeContext = useTheme()
	console.log('themeContext :', themeContext)
	const { href } = props
	const elementType = 'button'

	const buttonSize = props => {
		const { size } = props
		const index = size || 'lg'
		const config = {
			xs: css`
				padding: 0;
				font-size: 12px;
			`,
			sm: css`
				padding: 0 16px;
				font-size: 14px;
			`,
			md: css`
				padding: 0 20px;
				font-size: 14px;
			`,
			lg: css`
				padding: 0 24px;
				font-size: 14px;
			`,
		}
		return config[index]
	}

	return {
		Button: styled(elementType)`
			label: Button;
			color: blue;
			${buttonSize}
			${props => {
				const { customizeCSS } = props
				return customizeCSS
			}}
		`,
	}
}
