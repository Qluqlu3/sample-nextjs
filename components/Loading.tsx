import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #aaa;
  opacity: 0.7;
  font-size: 17px;
`;

export const Loading = () => {
  return <Wrapper>Loading...</Wrapper>;
};
