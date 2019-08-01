import { Card, Container } from 'Common';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Content, Item, Language, ProjectGrid, Stats, Wrapper } from './styles';

export const Projects = () => {
	const data = useStaticQuery(graphql`
		query {
			allProjects {
				edges {
					node {
						id
						name
						url
						description
						stargazers {
							totalCount
						}
						languages {
							edges {
								node {
									color
									name
								}
							}
						}
					}
				}
			}
		}
	`)

	return (
		<Wrapper as={Container} id="projects">
			<h2>Code Samples</h2>
			<ProjectGrid>
				{data.allProjects.edges.map(({ node }) => (
					<Item
						key={node.id}
						as="a"
						href={node.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Card>
							<Content>
								<h4>{node.name}</h4>
								<p>{node.description}</p>
							</Content>
							<Stats>
								{node.languages.edges.map(({ node }) => (
									<Language key={node.color} color={node.color}>
										<span />
										{node.name}
									</Language>
								))}
							</Stats>
						</Card>
					</Item>
				))}
			</ProjectGrid>
		</Wrapper>
	)
}
