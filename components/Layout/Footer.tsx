import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: #aaaaaa;
  padding: 10px;
`;

export const Footer = () => {
  return <StyledFooter>&copy;Qluqlu3</StyledFooter>;
};
