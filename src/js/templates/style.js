import { styled, css } from 'lib/plugins/emotion'
import { useTheme } from 'emotion-theming'

export default props => {
	// props
	// theme
	const themeContext = useTheme()
	// variables
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
