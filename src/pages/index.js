import React from "react"
import { graphql, Link } from "gatsby"
import Moment from "react-moment"
import Header from "../components/Header"
import "../css/index.scss"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: null,
      redoFilter: null,
      clearFilter: true,
    }
  }

  filterByTag(event) {
    let tag = document.getElementById(event.target.id)
    let prevTag = document.getElementById(this.state.filter)
    let count = 0
    console.log(tag, prevTag)
    if (
      event.target.id === this.state.filter &&
      !tag.classList.contains("tag--bg")
    ) {
      this.setState({
        filter: event.target.id,
        clearFilter: false,
      })
      tag.classList.add("tag--bg")
    } else if (event.target.id === this.state.filter) {
      this.setState({
        filter: event.target.id,
        clearFilter: true,
      })
      prevTag.classList.remove("tag--bg")
    } else if (this.state.filter !== null) {
      this.setState({
        filter: event.target.id,
        redoFilter: event.target.id,
        clearFilter: false,
      })
      prevTag.classList.remove("tag--bg")
      tag.classList.add("tag--bg")
    } else {
      this.setState({
        filter: event.target.id,
        clearFilter: false,
      })
      tag.classList.add("tag--bg")
    }

    // let tag = document.getElementById(event.target.id)
    // console.log(event.target)
    // tag.classList.add("tag--bg")
  }

  render() {
    const { edges } = this.props.data.allMarkdownRemark
    const { tags } = this.props.data.allSitePage.edges[1].node.context
    return (
      <div>
        <Header />
        <div className="layout">
          <div className="layout__inner">
            {this.state.filter !== null && !this.state.clearFilter
              ? edges.map((edge, index) => {
                  const { frontmatter } = edge.node
                  if (frontmatter.tags.includes(this.state.filter)) {
                    return (
                      <Link className="post" key={index} to={frontmatter.path}>
                        <div className="post__header">
                          <h3>{frontmatter.title}</h3>
                        </div>
                        <div className="post__description">
                          <p>{frontmatter.description}</p>
                          <p className="post__date">
                            <Moment format="LL">{frontmatter.date}</Moment>
                          </p>
                        </div>
                        <div className="post__tags">
                          <ul>
                            {frontmatter.tags.map(tag => {
                              return <li key={tag}>{tag}</li>
                            })}
                          </ul>
                        </div>
                      </Link>
                    )
                  }
                })
              : this.state.clearFilter
              ? edges.map((edge, index) => {
                  const { frontmatter } = edge.node
                  return (
                    <Link className="post" key={index} to={frontmatter.path}>
                      <div className="post__header">
                        <h3>{frontmatter.title}</h3>
                      </div>
                      <div className="post__description">
                        <p>{frontmatter.description}</p>
                        <p className="post__date">
                          <Moment format="LL">{frontmatter.date}</Moment>
                        </p>
                      </div>
                      <div className="post__tags">
                        <ul>
                          {frontmatter.tags.map(tag => {
                            return <li key={tag}>{tag}</li>
                          })}
                        </ul>
                      </div>
                    </Link>
                  )
                })
              : null}
            <aside className="blog__tags">
              <h3>Tags</h3>
              <ul>
                {tags.map((tagName, index) => {
                  return (
                    <li key={index}>
                      <button
                        id={tagName}
                        onClick={event => this.filterByTag(event)}
                        type="button"
                        tabIndex={index + 4}
                      >
                        #{tagName}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    )
  }
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
    allSitePage {
      edges {
        node {
          context {
            tags
          }
        }
      }
    }
  }
`

export default Layout
