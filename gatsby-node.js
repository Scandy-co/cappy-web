/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require(`path`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const loadBlogPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulBlogPost.edges.map(({ node }) => {
        console.log("Hey charles", node)
        createPage({
          path: `posts/${node.slug}/`,
          component: path.resolve(`./src/templates/blogPost.js`),
          context: {
            slug: node.slug
          }
        });
      });
      resolve();
    });
  });

  return Promise.all([loadBlogPosts])
};