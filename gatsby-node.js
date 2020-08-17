exports.createPages = async ({ graphql, actions }) => {
const { createPage } = actions
const result = await graphql(`
    {
        allSanityVilla {
            edges {
                node {
                    slug {
                        current
                    }
                }
            }
        }
    }
`)
if (result.errors) {
    throw result.errors
}
const villas = result.data.allSanityVilla.edges || []
villas.forEach((edge, index) => {
    const path = `${edge.node.slug.current}`
    createPage({
        path,
        component: require.resolve("./src/templates/villa-template.js"),
        context: { slug: edge.node.slug.current },
        })
    })
}