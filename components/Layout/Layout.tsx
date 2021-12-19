import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Footer } from './Footer';
import { Header } from './Header';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 90vh;
  background-color: #eeeeee;
`;

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  );
};
