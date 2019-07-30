import { Card, Container } from 'Common'
import React from 'react'
import starIcon from 'Static/icons/star.svg'
import { useStaticQuery, graphql } from 'gatsby'
import { Content, Grid, Item, Stats, Wrapper, Language } from './styles'

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
			<Grid>
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
								{/* My repo popularity is sad */}
								{/* <div>
									<img src={starIcon} alt="stars" />
									<span>{node.stargazers.totalCount}</span>
								</div> */}
								{node.languages.edges.map(({ node }) => (
									<Language color={node.color}>
										<span />
										{node.name}
									</Language>
								))}
							</Stats>
						</Card>
					</Item>
				))}
			</Grid>
		</Wrapper>
	)
}
