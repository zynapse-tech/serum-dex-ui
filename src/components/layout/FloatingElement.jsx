import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 5px;
  padding: 20px;
  background-color: #1a2029;
  height: 100%;  
  over
`;

export default function FloatingElement({ style, children }) {
  return <Wrapper style={{ ...style }}>{children}</Wrapper>;
}
