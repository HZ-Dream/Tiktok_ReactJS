import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from '../Video.module.scss';
import { VolumeMuteIcon, PLayIcon, VolumeIcon, PauseIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function VideoControls({ data }) {
    return (
        <div className={cx('controls')}>
            <div className={cx('controls-video')}>
                <div className={cx('play-pause')} onClick={data.onPlayPause}>
                    {data.isPlaying ? <PauseIcon /> : <PLayIcon />}
                </div>
                <div className={cx('volume')}>
                    <div className={cx('change-volume')}>
                        <input
                            className={cx('range')}
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={data.volume}
                            onChange={(e) => {
                                data.handleAdjustVolume(e);
                            }}
                        />
                    </div>
                    <div className={cx('sound-mute')} onClick={data.toggleMuted}>
                        {data.isMute ? <VolumeMuteIcon /> : <VolumeIcon />}
                    </div>
                </div>
                <div className={cx('progress-time')}>
                    <div className={cx('time-video')}>
                        <div className={cx('control-time')}>
                            <input
                                id={styles.progress}
                                className={cx('range-time')}
                                type="range"
                                step="0.1"
                                min="0"
                                max="100"
                                onChange={data.handleSetTime}
                            />
                            <label
                                htmlFor={styles.progress}
                                className={cx('range-progess')}
                                style={{ transform: `scaleX(${data.progress}) translateY(-50%)` }}
                            ></label>
                        </div>
                        <div className={cx('timeon')}>{`${data.minutesLoad}:${data.secondsLoad < 10 ? '0' : ''}${
                            data.secondsLoad
                        }/${data.minutesTotal}:${data.secondsTotal < 10 ? '0' : ''}${data.secondsTotal}`}</div>
                    </div>
                </div>
            </div>
            <div className={cx('time')}></div>
        </div>
    );
}

VideoControls.propTypes = {
    data: PropTypes.object.isRequired,
};

export default VideoControls;
