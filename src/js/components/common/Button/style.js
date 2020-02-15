import { styled, css, rem } from 'lib/plugins/emotion'
import { useTheme } from 'emotion-theming'

export default props => {
	// props
	const { href } = props
	// theme
	const { colors, border } = useTheme()
	// variables
	const buttonSize = props => {
		const { dataSize } = props
		const index = dataSize || 'xs'
		const config = {
			xs: css`
				padding: 8px;
				font-size: ${rem(12)};
			`,
			sm: css`
				padding: 8px 16px;
				font-size: ${rem(14)};
			`,
			md: css`
				padding: 10px 20px;
				font-size: ${rem(16)};
			`,
			lg: css`
				padding: 12px 24px;
				font-size: ${rem(18)};
			`,
		}
		return config[index]
	}

	return {
		Button: styled('button')`
			label: Button;
			color: blue;
			border-radius: ${border.radius.basic};
			border: 1px solid ${colors.primary};
			${buttonSize}
			${props => {
				const { customizeCSS } = props
				return customizeCSS
			}};
		`,
	}
}
