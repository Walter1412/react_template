import { styled, css, rem } from 'lib/plugins/emotion'
import { useTheme } from 'emotion-theming'

export default props => {
	// props

	// theme
	const themeContext = useTheme()
	const { colors, border } = themeContext
	// variables

	return {
		Input: styled('div')`
			label: Input;
			position: relative;
			width: 100%;
		`,
		InputText: styled('input')`
			label: InputText;
			width: 100%;
			height: 100%;
			padding: 8px 16px;
			border: 1px solid ${colors.primaryDarkest};
			border-radius: ${border.radius.basic};
			font-size ${rem(16)};
			&:focus,&:active {
				outline: none;
				border-color: ${colors.primary};
			}
			&:hover{
				border-color: ${colors.primary};
			}
			${props => {
				const { customizeCSS } = props
				return customizeCSS
			}};
		`,
		InputPrefix: styled('span')`
			label: Prefix;
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			left: 0;
			top: 0;
		`,
		InputSuffix: styled('span')`
			label: Suffix;
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			right: 0;
			top: 0;
		`,
	}
}
