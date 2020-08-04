import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'

const Home = () => {
  const data = useStaticQuery(graphql`
    query myQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `)

  const project_list = data.allMarkdownRemark.edges
  const projects = project_list.map(project => 
    
    <div key={project.node.frontmatter.path}>
      <Link to={project.node.frontmatter.path}>{project.node.frontmatter.title}</Link>
    </div>  
    
    
  )
  return <div>{projects}</div>
}

export default Home