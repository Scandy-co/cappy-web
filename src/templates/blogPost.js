import React from "react"
import Link from "gatsby-link"
import * as PropTypes from "prop-types"
import Img from "gatsby-image"


const propTypes = {
  data: PropTypes.object.isRequired,
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.contentfulBlogPost
    const {
        title,
        body,
        cover,
        date,
        tags,
        author: {
            fullName,
            avatar,
            twitter,
        }
    } = post
    return (
      <div>
        <div
          style={{
            display: `flex`,
            alignItems: `center`,
          }}
        >

          
          <div
            dangerouslySetInnerHTML={{
              __html: body.childMarkdownRemark.html,
            }}
          />
          <div>{author.fullName} - {author.twitter}</div>
          <Img style={{ margin: 0 }}
              resolutions={author.avatar.resolutions}
              />

        </div>
      </div>
    )
  }
}

BlogPostTemplate.propTypes = propTypes

export default BlogPostTemplate

export const pageQuery = graphql`
  query blogQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
          childMarkdownRemark {
              html
          }
      }
     
      date
      tags
      author {
          fullName
          avatar {
            resolutions(width: 50, height: 50) {
              base64
              src
              srcSet
              height
              width
            }
          }
          twitter
      }
    }
  }
`