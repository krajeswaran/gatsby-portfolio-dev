const config = require('./data/config')

const { GraphQLClient } = require(`graphql-request`)

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
	const { createNode } = actions
	const { githubLogin } = config

	return new Promise((resolve, reject) => {
		const query = `
		query($githubLogin: String!) {
				repositoryOwner(login: $githubLogin) {
						pinnedRepositories(first: 6) {
							edges {
								node {
									id
									name
									url
									description
									stargazers {
										totalCount
									}
									forkCount
									languages(first: 2) {
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
		}
	`
		const variables = {
			githubLogin,
		}

		const graphqlClient = new GraphQLClient('https://api.github.com/graphql', {
			headers: {
				Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
			},
		})
		graphqlClient
			.request(query, variables)
			.then(data => {
				data.repositoryOwner.pinnedRepositories.edges.forEach(node => {
					const projectNode = {
						id: createNodeId(node.node.id),
						internal: {
							type: `Projects`,
						},
						parent: null,
						children: [],
						...node.node,
					}
					projectNode.internal.contentDigest = createContentDigest(node)

					createNode(projectNode)
				})
			})
			.then(resolve)
			.catch(reject)
	})
}
