import styled from 'styled-components'

export const Card = styled.div`
	background: hsl(0, 0%, 99%);
	box-shadow: 0 1px 2px 0 hsla(0, 0%, 0%, 0.2);
	height: 100%;
	border-top: 6px solid;
	border-color: ${props => (props.accent ? props.accent : `hsl(0,0%, 99%)`)};
`
