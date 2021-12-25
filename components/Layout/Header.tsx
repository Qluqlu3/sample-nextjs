import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: #aaaaaa;
`;

const LinkButton = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.2s, color 0.2s ease-in-out;
  font-size: 21px;
  cursor: pointer;
  &:hover {
    background-color: #bbbbbb;
    color: #333333;
  }
`;

const Home = styled(LinkButton)``;

const Data = styled(LinkButton)``;

export const Header = () => {
  return (
    <StyledHeader>
      <Home>
        <Link href='/'>Home</Link>
      </Home>
      <Data>
        <Link href='/form'>Form</Link>
      </Data>
    </StyledHeader>
  );
};
