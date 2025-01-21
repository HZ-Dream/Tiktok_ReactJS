import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from '../Video.module.scss';
import { EllipsisIcon } from '~/components/Icons';
import MenuOptions from './MenuOptions';

const cx = classNames.bind(styles);

function VideoOptions() {
    const showOptions = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <MenuOptions />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div className={cx('video-options')}>
            <Tippy
                interactive
                delay={[500, 0]}
                offset={[50, 30]}
                render={showOptions}
                placement="right"
                appendTo={document.body}
            >
                <div className={cx('options-lists')}>
                    <EllipsisIcon />
                </div>
            </Tippy>
        </div>
    );
}

export default VideoOptions;
