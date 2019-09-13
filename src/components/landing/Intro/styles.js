import styled from 'styled-components'

export const Wrapper = styled.div`
	padding-bottom: 5rem;
`

export const IntroWrapper = styled.div`
	padding: 2rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.2rem;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	flex: 1;
	padding-top: 5rem;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
		margin-left: 2rem;
	}

	img {
		border-radius: 4%;
		box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
		width: 40%;
		margin-left: 7rem;
		margin-bottom: 3rem;

		@media (max-width: 680px) {
			margin-left: 6rem;
		}
	}

	h3 {
		margin-bottom: 2rem;
		font-size: 18pt;
		color: hsl(0, 0%, 15%);

		@media (max-width: 680px) {
			font-size: 14pt;
			margin-bottom: 1rem;
		}
	}

	p {
		margin-bottom: 1.2rem;
		font-size: 12pt;
		color: hsl(0, 0%, 25%);

		@media (max-width: 680px) {
			font-size: 10pt;
			margin-bottom: 0.5rem;
		}
	}

	button {
		margin-top: 2rem;
		font-weight: bold;
	}
`

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		display: none;
	}

	img {
		width: 100%;
	}
`
