import { styled, css, mq } from 'lib/plugins/emotion'

export default props => {
	return {
		Header: styled('footer')`
			${mq({
				width: ['100%', '560px', '720px', '900px'],
			})};
			border: 1px solid blue;
		`,
	}
}
