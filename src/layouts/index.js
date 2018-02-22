import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import styled, { ThemeProvider, injectGlobal } from 'styled-components';

const colors = {
  primaryColor: '#E55039',
  linkColor: '#1E3799'
};

injectGlobal`
  body {
    border-top: 8px solid ${colors.primaryColor};
  }
`

const Container = styled.div`
  margin:      0 auto;
  max-width:   960px;
  padding: 100px 20px 0;
`;

const TemplateWrapper = ({ children }) => (
  <Container >
    <Helmet
      title='Leo Generali | Front End Developer'
      meta={[
        { name: 'description', content: 'Leo Generali is a Front End Developer in Washington DC. He creates thoughtfully designed web experiences with JavaScript and Rails.' },
        { name: 'keywords', content: 'front-end, javascript, css, sass, washington dc, ui, ux, react, redux, gatsby, rails' },
      ]}
    />
    <ThemeProvider theme={colors}>
      {children()}
    </ThemeProvider>
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
