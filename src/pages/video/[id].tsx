import { useRouter } from 'next/router';
import Video from 'Src/components/pages/video';

const VideoPage = () => {
    const router = useRouter();
    console.log(router.query.id);

    return (
        <Video />
    );
}

export default VideoPage;