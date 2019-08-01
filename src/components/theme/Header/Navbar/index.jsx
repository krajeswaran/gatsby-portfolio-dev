import { Container } from 'Common';
import React from 'react';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
	<Wrapper as={Container}>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
