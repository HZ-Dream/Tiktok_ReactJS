import classNames from 'classnames/bind';
import styles from '../Video.module.scss';
import { CommentIcon, FavoriteIcon, HeartIcon, ShareIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function VideoSidebar({ data }) {
    return (
        <div className={cx('inner')}>
            <div className={cx('channel')}>Hoài</div>
            <div className={cx('interact')}>
                <div className={cx('icon')}>{<HeartIcon />}</div>
                <div className={cx('quantity')}>{data.likes}</div>
                <div className={cx('icon')}>{<CommentIcon />}</div>
                <div className={cx('quantity')}>{data.chats}</div>
                <div className={cx('icon')}>{<FavoriteIcon />}</div>
                <div className={cx('quantity')}>{data.favorites}</div>
                <div className={cx('icon')}>{<ShareIcon />}</div>
                <div className={cx('quantity')}>{data.shares}</div>
            </div>
        </div>
    );
}

export default VideoSidebar;
