import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { themeFirst } from '../helper/themefirst'

const Header = styled.header`
  height: ${props => themeFirst(props, 'h')};
  position: absolute;
`;

export default Header;