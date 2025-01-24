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
    const [isPlaying, setIsPlaying] = useState(true);
    const contextVideo = useContext(VideoContext);

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

    const value = { isPlaying, onPlayPause: handlePlayPause, ...contextVideo };

    return (
        <div className={cx('wrapper')}>
            <VideoOptions />
            <video ref={videoRef} className={cx('video')} autoPlay loop>
                <source src={url} type="video/mp4" />
            </video>
            <VideoControls data={value} />
            <VideoSidebar data={data} />
        </div>
    );
}

export default VideoItem;
