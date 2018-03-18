require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});
try {
  var contentfulConfig = require("./.contentful");
} catch (e) {
  var contentfulConfig = {
    production: {
      spaceId: process.env.SPACE_ID,
      accessToken: process.env.ACCESS_TOKEN
    }
  };
}
module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-contentful`,
      options: process.env.NODE_ENV === "development" ? contentfulConfig.development : contentfulConfig.production
    }
  ],
};

