import { styled, css, mq } from 'lib/plugins/emotion'

export default props => {
	return {
		Header: css`
			${mq({
				width: ['100%', '560px', '720px', '900px'],
			})};
			height: 200px;
			border: 1px solid red;
		`,
	}
}
