import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { ThemeProvider, injectGlobal } from 'styled-components'
import css from '../css'
import Content from '../components/content'
import Header from './head'
import Footer from './footer'
import theme from '../theme.default'

injectGlobal`${css}`
export const TemplateWrapper = ({ children, theme }) => [
  <Helmet
    key="helmet"
    title="Gatsby Default Starter"
    meta={[
      { name: 'description', content: 'Sample' },
      { name: 'keywords', content: 'sample, something' },
    ]}
  />,
  <Header key="header" cid="header">
    <Content cid="page" center>
      Gatsby
    </Content>
  </Header>,
  <Content fid="header" fkey={{
    "padding-top": "height"
  }} key="content" full>
    <Content cid="page" pab="1.45rem" center>
      {children()}
    </Content>
  </Content>,
  <Footer>
    <Content cid="page" center>
      <Link to="/" style={{ textDecoration: 'none' }}>Gatsby</Link>
    </Content>
  </Footer>
];

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const Layout = ({ ...rest }) => <ThemeProvider theme={theme}>
  <TemplateWrapper {...rest} />
</ThemeProvider>

export default Layout
