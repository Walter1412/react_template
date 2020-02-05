import { styled, css, mq } from 'lib/plugins/emotion'

export default props => {
	return {
		Template: styled('div')`
			label: Template;
			${mq({
				width: ['100%', '560px', '720px', '900px'],
			})};
			border: 1px solid blue;
			margin: 0 auto;
			height: 400px;
		`,
	}
}
