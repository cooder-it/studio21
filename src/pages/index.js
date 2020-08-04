import React, { useEffect } from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import '../../static/styles/index.css'
import { gsap } from 'gsap'
import { ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(()=>{
    gsap.defaults({ease: "none", duration: 2});
    const tl = gsap.timeline();
    tl.from(".page2", {xPercent: -100, rotation: 0.01})
      .from(".page3", {xPercent: -100, rotation: 0.01})

    ScrollTrigger.create({
      animation: tl,
      trigger: "#container",
      start: "top top",
      end: "+=4000", 
      scrub: 0.5,
      pin: true,
      anticipatePin: 1
    });
  })

   
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
  let count = 0
  const projects = project_list.map(project => {
    count += 1;
    return(  <div className={`page${count} page`} key={project.node.frontmatter.path}>
        <Link to={project.node.frontmatter.path}>{project.node.frontmatter.title}</Link>
      </div>  )

  }
    
  )
  return (
    <main>
      <nav className="navbar">
        MENU
      </nav>
      <div className="description">
        <h2>Landing page</h2>
      </div>
      <div id="container">
        {projects}
      </div>
      <div className="kontakt">
        kontakt
      </div>
    </main>
  )
}

export default Home