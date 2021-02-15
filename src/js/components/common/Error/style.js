import { styled, css } from 'lib/plugins/emotion'
import { useTheme } from 'emotion-theming'

export default props => {
	// props
	// theme
	const themeContext = useTheme()
	// variables
	return {
		Error: styled('div')`
			label: Error;
			${props => {
				const { customizeCSS } = props
				return customizeCSS
			}}
		`,
	}
}
