import React, { useRef, useEffect } from "react";
import videojs from 'video.js';
import Player from "video.js/dist/types/player";

import 'video.js/dist/video-js.css';

const videoJsOptions: videojs.PlayerOptions = {
    autoplay: true,
    controls: true,
    fluid: false,
    responsive: true,
    sources: [
        {
            src: 'https://www.tutorialspoint.com/videos/sample480.mp4',
            type: 'video/mp4'
        },
    ],
    poster: "//vjs.zencdn.net/v/oceans.png",
    seekButtons: {
        forward: 30,
        back: 10
    }
};

const VideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef<Player | null>(null);

    useEffect(() => {
        if (!playerRef.current) {
            const videoElement = videoRef.current;

            if (!videoElement) {
                return;
            }

            playerRef.current = videojs(videoElement, videoJsOptions, function onPlayerReady() {
                videojs.log('Video player is ready');
            })
        }
    }, [videoRef]);

    return (
        <div data-vjs-player>
            <video ref={videoRef} className='video-js vjs-big-playcentered'/>
        </div>
    )
}

export default VideoPlayer;