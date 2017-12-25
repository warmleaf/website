import styled from 'styled-components';

const Flex = styled.div`
  display: ${props => props.inline ? 'inline-flex' : 'flex'};
  height: ${props => props.inline ? null : '100%'};
  width: ${props => props.inline ? null : '100%'};
  flex-direction: ${props => props.column ? 'column' : 'row'};
  align-items: ${props => props.center ? 'center' : null};
`;

export default Flex;
