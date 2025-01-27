import { useContext, useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Video.module.scss';
import VideoSidebar from './VideoSidebar';
import VideoControls from './VideoControls';
import VideoOptions from './VideoOptions';
import { VideoContext } from './VolumeVideo';

const cx = classNames.bind(styles);

const data = {
    likes: '12M',
    chats: '5.3K',
    favorites: '411K',
    shares: '24.5K',
};

function VideoItem({ url }) {
    const videoRef = useRef();
    const contextVideo = useContext(VideoContext);

    const [isPlaying, setIsPlaying] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    const [secondsLoad, setSecondsLoad] = useState(0);
    const [minutesLoad, setMinutesLoad] = useState(0);
    const [secondsTotal, setSecondsTotal] = useState(0);
    const [minutesTotal, setMinutesTotal] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (contextVideo.isMute) {
            videoRef.current.volume = 0;
        } else {
            videoRef.current.volume = contextVideo.volume;
        }
    }, [contextVideo.isMute, contextVideo.volume]);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = (e) => {
        const video = e.target;
        const percent = (video.currentTime / video.duration) * 100;
        setCurrentTime(percent);
        setProgress(video.currentTime / video.duration);

        const timeLoad = videoRef.current.currentTime;
        const minutesLoad = Math.floor(timeLoad / 60);
        setMinutesLoad(minutesLoad);
        const secondsLoad = Math.floor(timeLoad % 60);
        setSecondsLoad(secondsLoad);

        const totalTime = videoRef.current.duration;
        const minutesTotal = Math.floor(totalTime / 60);
        setMinutesTotal(minutesTotal);
        const secondsTotal = Math.floor(totalTime % 60);
        setSecondsTotal(secondsTotal);
    };

    const handleSetTime = (e) => {
        const percent = parseFloat(e.target.value);
        const time = (videoRef.current.duration / 100) * percent;
        videoRef.current.currentTime = time;
        setCurrentTime(percent);
        setProgress(videoRef.current.currentTime / videoRef.current.duration);
    };

    const value = {
        isPlaying,
        currentTime,
        secondsLoad,
        minutesLoad,
        secondsTotal,
        minutesTotal,
        progress,
        onPlayPause: handlePlayPause,
        handleSetTime: handleSetTime,
        ...contextVideo,
    };

    return (
        <div className={cx('wrapper')}>
            <VideoOptions />
            <video onTimeUpdate={handleTimeUpdate} ref={videoRef} className={cx('video')} autoPlay loop>
                <source src={url} type="video/mp4" />
            </video>
            <VideoControls data={value} />
            <VideoSidebar data={data} />
        </div>
    );
}

export default VideoItem;
