import React from "react"
import { StaticQuery, graphql } from "gatsby"
import profilePic from "../../public/images/profile-pic.png"
import twitterIcon from "../../public/images/twitter.svg"
import linkedInIcon from "../../public/images/linkedin.svg"
import emailIcon from "../../public/images/envelope.svg"

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
            <a href="twitter.com">
              <img src={twitterIcon} alt="twitter" />
            </a>
            <a href="linkedin.com">
              <img src={linkedInIcon} alt="linked in" />
            </a>
            <a href="mailto:nathancleon@gmail.com">
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
