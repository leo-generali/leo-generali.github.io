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
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-plugin-sharp',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 600,
              linkImagesToOriginal: false,
              wrapperStyle: 'margin: 30px 0;'
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            classPrefix: 'language-',
            inlineCodeMarker: null
          },
          'gatsby-remark-copy-linked-files'
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-80982613-1',
        head: false,
        anonymize: true,
      },
    },
  ],
};


