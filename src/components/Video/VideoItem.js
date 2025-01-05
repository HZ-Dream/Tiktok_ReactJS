import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import VideoSidebar from './VideoSidebar';

const cx = classNames.bind(styles);

const data = {
    likes: 12,
    chats: 56,
    favorites: 28,
    shares: 4,
};

function VideoItem({ url }) {
    return (
        <div className={cx('wrapper')}>
            <video className={cx('video')} autoPlay muted>
                <source src={url} type="video/mp4" />
            </video>
            <VideoSidebar data={data} />
        </div>
    );
}

export default VideoItem;
