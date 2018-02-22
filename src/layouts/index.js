import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components';

const Container = styled.div`
  margin:      0 auto;
  max-width:   960px;
  padding: 50px 20px 0;
`;

const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet
      title='Leo Generali | Front End Developer'
      meta={[
        { name: 'description', content: 'Leo Generali is a Front End Developer in Washington DC. He creates thoughtfully designed web experiences with JavaScript and Rails.' },
        { name: 'keywords', content: 'front-end, javascript, css, sass, washington dc, ui, ux, react, redux, gatsby, rails' },
      ]}
    />
    <div>
      {children()}
    </div>
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
