import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 5rem 0;

	h2 {
		margin-bottom: 4rem;
	}
`

export const SkillGrid = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 8fr;
	gap: 1.2rem 1.2rem;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`

export const Column = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	padding: 1rem;

	h4 {
		color: #fff;
		background-color: ${props => (props.color ? props.color : `#f1f1f1`)};
		text-align: center;
		font-style: bold;
		padding: 0.5rem;
	}

	p {
		color: #202020;
		text-align: center;
		margin: 0.5rem auto;
	}
`
