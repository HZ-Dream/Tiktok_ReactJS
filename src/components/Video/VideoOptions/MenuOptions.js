import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from '../Video.module.scss';
import { BreakHeartIcon, FlagIcon, UpScrollIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function MenuOptions() {
    const [autoScroll, setAutoScroll] = useState(false);

    return (
        <div className={cx('menu-options')}>
            <div className={cx('options-item')}>
                <UpScrollIcon />
                <div className={cx('options-wrapper')}>
                    <span className={cx('options-title')}>Auto Scroll</span>
                </div>
                <div
                    className={cx('toggle', autoScroll ? 'active' : '')}
                    onClick={() => setAutoScroll(!autoScroll)}
                ></div>
            </div>
            <div className={cx('options-item')}>
                <BreakHeartIcon />
                <div className={cx('options-wrapper')}>
                    <span className={cx('options-title')}>Not Interested</span>
                </div>
            </div>
            <div className={cx('options-item')}>
                <FlagIcon />
                <div className={cx('options-wrapper')}>
                    <span className={cx('options-title')}>Report</span>
                </div>
            </div>
        </div>
    );
}

export default MenuOptions;
