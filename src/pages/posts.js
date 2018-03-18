import React from 'react'
import Link from 'gatsby-link'

const AllBlogPosts = () => (
  <div>
    <h1>Hi from the all blog posts page</h1>
    <p>Welcome to page whateveh</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default AllBlogPosts



export const pageQuery = graphql`
  query allBlogQuery() {
    allContentfulBlogPosts {
    edges {
      node {
        id
        blogPost
        image {
          responsiveResolution(width: 100) {
            width
            height
            src
            srcSet
          }
        }
      }
    }
  }
}`
