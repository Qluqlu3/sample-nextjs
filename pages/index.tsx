import type { NextPage } from 'next';
import { Button } from 'components/Button';
import { Login } from 'components/Login';

const Home: NextPage = () => {
  const xxx = '';
  return (
    <>
      <Login />
      <Button message={'ボタン'} />
    </>
  );
};

export default Home;
