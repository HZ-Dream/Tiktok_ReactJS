import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from '../Video.module.scss';
import { VolumeMuteIcon, PLayIcon, VolumeIcon, PauseIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function VideoControls() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => setIsPlaying(!isPlaying);
    return (
        <div className={cx('controls')}>
            <div className={cx('controls-video')}>
                <div className={cx('play-pause')} onClick={handlePlayPause}>
                    {isPlaying ? <PLayIcon /> : <PauseIcon />}
                </div>
                <div className={cx('volume')}>
                    <div className={cx('change-volume')}>
                        <input className={cx('range')} type="range" min="0" max="1" step="0.1" />
                    </div>
                    <div className={cx('sound-mute')}>
                        <VolumeIcon />
                    </div>
                </div>
            </div>
            <div className={cx('time')}></div>
        </div>
    );
}

export default VideoControls;
