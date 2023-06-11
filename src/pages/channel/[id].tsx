import Сhannel from 'Src/components/pages/channel';
import { useRouter } from 'next/router';

const СhannelPage = () => {
  const router = useRouter();
  console.log(router.query.id);

  return <Сhannel />
}

export default СhannelPage;