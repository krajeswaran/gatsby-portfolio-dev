import styled from 'styled-components'

export const Wrapper = styled.div`
	padding: 5rem 0;

	h2 {
		margin-bottom: 4rem;
	}
`

export const ProjectGrid = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 8fr;
	gap: 1.2rem 1.2rem;

	@media (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 680px) {
		grid-template-columns: 1fr;
	}
`

export const Item = styled.div`
	width: 100%;
	height: 100%;
	overflow: hidden;
	padding: 1rem;

	h4 {
		color: #212121;
		padding-left: 1rem;
	}

	p {
		color: #707070;
		padding-left: 1rem;
	}
`

export const Content = styled.div`
	padding: 1rem 0;
`

export const Stats = styled.div`
	display: flex;
	align-items: center;

	div {
		display: flex;
		&:first-child {
			margin-right: 0.5rem;
		}

		img {
			margin: 0;
		}

		span {
			color: #000;
			margin-left: 1rem;
		}
	}
`
export const Language = styled.div`
	display: flex;
	color: #212121;

	span {
		background-color: ${props => (props.color ? props.color : `#ffffff`)};
		display: inline-block;
		border-radius: 50%;
		margin-top: 0.2rem;
		margin-right: 5px;
		border-radius: 50%;
		height: 12px;
		position: relative;
		top: 1px;
		width: 12px;
	}
`
