import Typography from "typography";
import githubTheme from 'typography-theme-github'

githubTheme.overrideThemeStyles = (options) => ({
  'h1,h2,h3,h4,h5,h6': {
    paddingBottom: '0',
    marginTop: '0',
    borderBottom: 'none'
  },

  'a': {
    color: '#1E3799'
  }
})

const typography = new Typography(githubTheme)

export default typography;
