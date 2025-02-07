import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './NextPrev.module.scss';
import Button from '../Button';
import { NextIcon, PrevIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function NextPrev() {
    const [scrollVideo, setScrollVideo] = useState(0);

    useEffect(() => {
        const handleScrollEvent = () => {
            setScrollVideo(window.scrollY);
        };

        window.addEventListener('scroll', handleScrollEvent);

        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, scrollVideo);
    }, [scrollVideo]);

    const handleScroll = (offset) => {
        let currScrollVideo = scrollVideo;
        if (currScrollVideo === 0 && offset < 0) {
            return;
        } else {
            setScrollVideo((prevScrollVideo) => prevScrollVideo + offset);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Button className={cx('btn', scrollVideo === 0 ? 'disabled' : '')} onClick={() => handleScroll(-580)}>
                <PrevIcon />
            </Button>
            <Button className={cx('btn')} onClick={() => handleScroll(580)}>
                <NextIcon />
            </Button>
        </div>
    );
}

export default NextPrev;
