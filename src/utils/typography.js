import Typography from "typography";
import githubTheme from 'typography-theme-github';

githubTheme.baseFontSize = '17px';

githubTheme.overrideThemeStyles = ({ rhythm }, options ) => ({
  'h1,h2,h3,h4,h5,h6': {
    marginTop: rhythm(1.3),
    marginBottom: rhythm(1),
    borderBottom: 'none',
  },
})

const typography = new Typography(githubTheme)

export default typography;
