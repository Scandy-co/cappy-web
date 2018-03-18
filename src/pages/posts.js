import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const propTypes = {
    data: PropTypes.object.isRequired,
}

class AllBlogPosts extends React.Component {

    render() {

        const posts = this.props.data.allContentfulBlogPost.edges
        console.log(posts)


        return (
            <div>
                <h1>Hi from the all blog posts page</h1>
                <p>you have arrived at the list of all of our posts</p>
                <Link to="/">Go back to the homepage</Link>

                <ul>
                    {posts.map(({ node: post }) => {
                        const {
                            slug,
                            id,
                            title,
                            date,
                            author
                        } = post
                        console.log(post, author, date)
                        return (

                            <li key={title} >
                                <Link to={slug}>{title}</Link>
                                <div>{date.substring(0, 10)} - {author[0].fullName} - {author[0].twitter}</div>
                                <Img style={{ margin: 0 }}
                                    resolutions={author[0].avatar.responsiveResolution}
                                />
                            </li>)
                    })
                    }
                </ul>
            </div>
        );
    }
}

export default AllBlogPosts;



export const pageQuery = graphql`
  query allBlogQuery {allContentfulBlogPost {
    edges {
      node {
        slug
        id 
        title
        date
        author {
          fullName
          twitter
          avatar {
            responsiveResolution (width: 100) {
              width
              height
              src
              srcSet
            }
          }
        }
       
          }
        }
      }
    }`
