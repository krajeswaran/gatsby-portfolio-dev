import { Card, Container } from 'Common'
import React from 'react'
import starIcon from 'Static/icons/star.svg'
import { useStaticQuery, graphql } from 'gatsby'
import { Content, Grid, Item, Stats, Wrapper } from './styles'

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
					}
				}
			}
		}
	`)

	return (
		<Wrapper as={Container} id="projects">
			<h2>Projects</h2>
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
								<div>
									<img src={starIcon} alt="stars" />
									<span>{node.stargazers.totalCount}</span>
								</div>
							</Stats>
						</Card>
					</Item>
				))}
			</Grid>
		</Wrapper>
	)
}
