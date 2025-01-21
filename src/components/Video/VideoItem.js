import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import VideoSidebar from './VideoSidebar';
import VideoControls from './VideoControls';
import VideoOptions from './VideoOptions';

const cx = classNames.bind(styles);

const data = {
    likes: '12M',
    chats: '5.3K',
    favorites: '411K',
    shares: '24.5K',
};

function VideoItem({ url }) {
    return (
        <div className={cx('wrapper')}>
            <VideoOptions />
            <video className={cx('video')} autoPlay muted loop>
                <source src={url} type="video/mp4" />
            </video>
            <VideoControls />
            <VideoSidebar data={data} />
        </div>
    );
}

export default VideoItem;
