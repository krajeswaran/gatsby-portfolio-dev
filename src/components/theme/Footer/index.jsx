import React from 'react'
import { Container } from 'Common'
import { defaultTitle } from 'Data'
import { Wrapper, Flex, Details } from './styles'

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>{defaultTitle}</h2>
				<span>
					© All rights are reserved | {new Date().getFullYear()} | Forked with{' '}
					<span aria-label="love" role="img">
						💖
					</span>{' '}
					from{' '}
					<a
						href="https://smakosh.com/?ref=portfolio-dev"
						rel="noopener noreferrer"
						target="_blank"
					>
						Smakosh
					</a>
				</span>
			</Details>
		</Flex>
	</Wrapper>
)
