import { useSession, signIn, signOut } from 'next-auth/react';
import styled from 'styled-components';
import { Loading } from './Loading';
import { Button } from './Button';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginInfo = styled.div`
  width: 700px;
  height: 500px;
  background-color: #eee;
  border-radius: 5px;
  border: solid 1px #aaa;
`;

const ThumbnailBox = styled.img`
  width: 50px;
  height: 50px;
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const Name = styled.p`
  font-size: 15px;
`;

const Token = styled.p`
  font-size: 15px;
`;

export const Login = () => {
  const { data: session, status } = useSession();

  return (
    <Wrapper>
      {session ? (
        <LoginInfo>
          <ThumbnailBox>
            <Thumbnail src={session?.user?.image ?? ''} />
          </ThumbnailBox>
          <Name>{session?.user?.name}</Name>
          <Token>{session.user?.email}</Token>
          <Button message={'Sign out'} onClick={() => signOut()} />
        </LoginInfo>
      ) : (
        <LoginInfo>
          <Button message={'Sign in'} onClick={() => signIn()} />
        </LoginInfo>
      )}
      {status === 'loading' && <Loading />}
    </Wrapper>
  );
};
