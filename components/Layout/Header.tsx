import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bbbbbb;
`;

export const Header = () => {
  return <StyledFooter>Header</StyledFooter>;
};
