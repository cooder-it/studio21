const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`./src/components/project-page.js`)

    const res = await graphql(`
    {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `)

    res.data.allMarkdownRemark.edges.forEach(edge => {
        createPage({
          // Path for this page — required
          path: `${edge.node.frontmatter.path}/`,
          component: blogPostTemplate,
          context: {
           slug: edge.node.frontmatter.path
          },
        })
    })
}
