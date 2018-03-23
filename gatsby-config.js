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
try {
  var firebaseConfig = require("./.firebase");
} catch (e) {
  var firebaseConfig = {
    production: {
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      apiKey: process.env.FIREBASE_API_KEY,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-contentful`,
      options: process.env.NODE_ENV === "development" ? contentfulConfig.development : contentfulConfig.production
    }
  ],
};

