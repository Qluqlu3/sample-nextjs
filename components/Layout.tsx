import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Footer } from './Footer';

const Wrapper = styled.div``;

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <Wrapper>
      <main>{children}</main>
      <Footer />
    </Wrapper>
  );
};
