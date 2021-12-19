import { signIn, signOut, useSession } from 'next-auth/client';
import styled from 'styled-components';

const Wrapper = styled.div``;

const LoginInfo = styled.div``;

export const Login = () => {
  const [session, loading] = useSession();

  return (
    <Wrapper>
      {session ? (
        <LoginInfo>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </LoginInfo>
      ) : (
        <LoginInfo>
          <img src={session.user.image ?? ''} width='50px' /> {session.user.name}
          {session.accessToken} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </LoginInfo>
      )}
    </Wrapper>
  );
};
