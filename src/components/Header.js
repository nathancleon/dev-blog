import React from "react"
import { StaticQuery, graphql } from "gatsby"
import profilePic from "../../static/images/profile-pic.png"
import linkIcon from "../../static/images/link.svg"
import linkedInIcon from "../../static/images/linkedin.svg"
import emailIcon from "../../static/images/envelope.svg"

const TitleAndDescription = ({ data }) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description
  const introduction = data.site.siteMetadata.introduction
  const authorDescription = data.site.siteMetadata.author.description

  return (
    <section className="header-container">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{introduction}</p>
      <div className="author-container">
        <div>
          <img className="author-img" src={profilePic} alt="the author" />
          <div className="author-social">
            <a tabIndex="1" href="https://www.nathancleon.com" target="_blank">
              <img src={linkIcon} alt="link" />
            </a>
            <a
              tabIndex="2"
              href="https://www.linkedin.com/in/nathancleon/"
              target="_blank"
            >
              <img src={linkedInIcon} alt="linked in" />
            </a>
            <a tabIndex="3" href="mailto:nathancleon@gmail.com">
              <img src={emailIcon} alt="email" />
            </a>
          </div>
          <p>{authorDescription}</p>
        </div>
      </div>
    </section>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
              introduction
              author {
                image
                description
              }
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}

export default Header
