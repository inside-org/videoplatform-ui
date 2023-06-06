import { useRouter } from 'next/router';

const Сhannel = () => {
  const router = useRouter();

  return <p>Сhannel: {router.query.id}</p>;
}

export default Сhannel;