import { useRouter } from 'next/router';

const Name = () => {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.name}</h1>
    </div>
  );
};
export default Name;
