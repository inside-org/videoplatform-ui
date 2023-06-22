import React, { useRef, useEffect, useState } from "react";
import videojs from 'video.js';

import 'video.js/dist/video-js.css';

const videoJsOptions: Playertions = {
    autoplay: true,
    controls: false,
    fluid: false,
    responsive: true,
    sources: [
        {
            src: 'https://www.tutorialspoint.com/videos/sample480.mp4',
            type: 'video/mp4'
        },
    ],
    poster: "//vjs.zencdn.net/v/oceans.png",
};

const VideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const playerRef = useRef({});

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
    }, [playerRef]);

    const handlePlay = () => {
        playerRef.current?.play();
        videojs.log('Video player is play');
    };

    const handleStop = () => {
        playerRef.current?.pause();
        videojs.log('Video player is stop');
    };

    const handleMute = () => {
        playerRef.current?.muted(true);
        videojs.log('Video player is mute');
    };

    return (
        <React.Fragment>
            <div data-vjs-player>
                <video ref={videoRef} className='video-js vjs-big-playcentered'/>
            </div>
            <button onClick={handlePlay}>play</button>
            <button onClick={handleStop}>stop</button>
            <button onClick={handleMute}>mute</button>
        </React.Fragment>
    )
}

export default VideoPlayer;