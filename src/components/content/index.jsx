import styled from 'styled-components'
import { themeFirst } from '../../helper/themefirst'

const Content = styled.div`
  margin-left: ${props => props.center ? 'auto' : null};
  margin-right: ${props => props.center ? 'auto' : null};
  padding-top: ${props => themeFirst(props, 'pat')};
  padding-bottom: ${props => themeFirst(props, 'pab')};
  padding-left: ${props => themeFirst(props, 'pal')};
  padding-right: ${props => themeFirst(props, 'par')};
  max-width: ${props => themeFirst(props, 'maw')};
  padding: ${props => themeFirst(props, 'pa')};
  flex: ${props => props.full ? 1 : null};
`;

export default Content;
