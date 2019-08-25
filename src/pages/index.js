import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import "../css/index.scss"

const Layout = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <Header />
      <div className="layout">
        <div className="layout-inner">
          {edges.map(edge => {
            const { frontmatter } = edge.node
            return (
              <Link key={frontmatter.path} to={frontmatter.path}>
                <div className="blogpost-header">
                  <h3>{frontmatter.title}</h3>
                </div>
                <div className="blogpost-description">
                  <p>{frontmatter.description}</p>
                  <p className="blogpost-date">{frontmatter.date}</p>
                </div>
                <div className="blogpost-tags">
                  <ul>
                    {frontmatter.tags.map(tag => {
                      return <li key={tag}>{tag}</li>
                    })}
                  </ul>
                </div>
              </Link>
            )
          })}
          <a>title</a>
          <a>title</a>
        </div>
        <div>
          <Link to="/tags">Browse by tag</Link>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            description
            tags
          }
        }
      }
    }
  }
`

export default Layout
