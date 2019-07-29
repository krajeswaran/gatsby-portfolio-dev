import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/contact.svg'
import config from 'Data'
import { Wrapper, Details, Thumbnail } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
	<Wrapper as={Container} id="contact">
		<Details>
			<ContactForm />
		</Details>
		<Thumbnail>
			<img src={contact} alt={config.defaultDescription} />
		</Thumbnail>
	</Wrapper>
)
