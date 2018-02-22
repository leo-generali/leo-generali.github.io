module.exports = {
  siteMetadata: {
    title: 'Leo Generali | Front End Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/writing`,
        name: 'markdown-pages',
      },
    },
    'gatsby-transformer-remark',
  ],
};
