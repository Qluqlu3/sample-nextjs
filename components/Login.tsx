import { useSession, signIn, signOut } from 'next-auth/react';
import styled from 'styled-components';
import { Loading } from './Loading';

const Wrapper = styled.div``;

const LoginInfo = styled.div``;

export const Login = () => {
  const { data: session, status } = useSession();

  return (
    <Wrapper>
      {session ? (
        <LoginInfo>
          <img src={session?.user?.image ?? ''} width='50px' /> {session?.user?.name}
          {session.accessToken} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </LoginInfo>
      ) : (
        <LoginInfo>
          <button onClick={() => signIn()}>Sign in</button>
        </LoginInfo>
      )}
      {status === 'loading' && <Loading />}
    </Wrapper>
  );
};
