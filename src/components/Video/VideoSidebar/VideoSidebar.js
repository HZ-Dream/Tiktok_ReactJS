import { useState } from 'react';
import classNames from 'classnames/bind';
import {
    CommentIcon,
    FavoriteActiveIcon,
    FavoriteIcon,
    FollowCheckIcon,
    FollowIcon,
    HeartActiveIcon,
    HeartIcon,
    ShareIcon,
} from '~/components/Icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';
import styles from '../Video.module.scss';
import AccountPreview from '~/components/ListedAccounts/AccountPreview';

const cx = classNames.bind(styles);

function VideoSidebar({ data }) {
    const [isFollowed, setIsFollowed] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);

    const classIcon = 'icon-videosidebar';

    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    const handleFollow = () => {
        setIsFollowed(!isFollowed);
    };

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const handleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <div className={cx('inner')}>
            <div className={cx('channel')}>
                <Tippy
                    interactive
                    delay={[500, 300]}
                    offset={[120, 20]}
                    render={renderPreview}
                    placement="bottom"
                    appendTo={document.body}
                >
                    <div className={cx('account')}>
                        <img className={cx('avatar')} src={images.noImage} alt="Avatar" />
                    </div>
                </Tippy>
                <div className={cx('btn-follow', isFollowed && 'active')} onClick={handleFollow}>
                    {isFollowed === true ? <FollowCheckIcon /> : <FollowIcon />}
                </div>
            </div>
            <div className={cx('interact')}>
                <div className={cx('icon')} onClick={handleLike}>
                    {isLiked === true ? (
                        <HeartActiveIcon className={cx(classIcon)} />
                    ) : (
                        <HeartIcon className={cx(classIcon)} />
                    )}
                </div>
                <strong className={cx('quantity')}>{data.likes}</strong>
                <div className={cx('icon')}>{<CommentIcon className={cx(classIcon)} />}</div>
                <strong className={cx('quantity')}>{data.chats}</strong>
                <div className={cx('icon')} onClick={handleFavorite}>
                    {isFavorited === true ? (
                        <FavoriteActiveIcon className={cx(classIcon)} />
                    ) : (
                        <FavoriteIcon className={cx(classIcon)} />
                    )}
                </div>
                <strong className={cx('quantity')}>{data.favorites}</strong>
                <div className={cx('icon')}>{<ShareIcon className={cx(classIcon)} />}</div>
                <strong className={cx('quantity')}>{data.shares}</strong>
            </div>
        </div>
    );
}

export default VideoSidebar;
