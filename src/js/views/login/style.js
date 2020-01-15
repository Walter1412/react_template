import { styled } from 'js/lib/plugins/emotion'

export const Example = styled('span')`
	color: lightgreen;
	& > a {
		color: ${props => props.color};
	}
`
