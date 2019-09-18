import React from "react"
import { graphql, Link } from "gatsby"
import Moment from "react-moment"
import HomeIcon from "../../static/images/home-lg.svg"

const Template = ({ data, pageContext }) => {
  const { next, prev } = pageContext
  const { markdownRemark } = data
  const title = markdownRemark.frontmatter.title
  const date = markdownRemark.frontmatter.date
  const tags = markdownRemark.frontmatter.tags
  const html = markdownRemark.html
  return (
    <div className="blogpost-container">
      <div className="blogpost__header">
        <Link to="/" className="blogpost--home">
          <img src={HomeIcon} alt="home icon" />
        </Link>
        <div className="header--title">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="header--content">
        <p className="blogpost--date">
          <Moment format="LL">{date}</Moment>
        </p>
        <div className="blogpost--tags">
          <p>TAGS:</p>
          {tags.map((tag, index) => {
            return (
              <p className="blogpost--tag" key={index}>
                {tag}
              </p>
            )
          })}
        </div>
      </div>
      <div className="blogpost" dangerouslySetInnerHTML={{ __html: html }} />
      <div className="blogpost--links">
        {prev && (
          <Link to={prev.frontmatter.path}>← {prev.frontmatter.title}</Link>
        )}
        {next && (
          <Link to={next.frontmatter.path}>{next.frontmatter.title} →</Link>
        )}
      </div>
    </div>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`

export default Template
