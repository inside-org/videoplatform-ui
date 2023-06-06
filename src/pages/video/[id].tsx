import { useRouter } from 'next/router';

const Video = () => {
    const router = useRouter();

    return <p>Video: {router.query.id}</p>;
}

export default Video;