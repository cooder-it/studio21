import React from 'react'
import { graphql, Link } from 'gatsby'

export const pageQuery = graphql`
query MyQuery($slug: String!) {
    markdownRemark(frontmatter: {path: {eq: $slug}}) {
      frontmatter {
        title
        path
      }
    }
  }
`  

const project_page = (props) => {
    return (
        <div>
            <p>{props.data.markdownRemark.frontmatter.title}</p>
            <p>Zawartość</p>
            <Link to="/">wróc</Link>
        </div>
    )
}

export default project_page