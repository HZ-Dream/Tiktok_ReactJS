import classNames from 'classnames/bind';
import styles from './NextPrev.module.scss';
import Button from '../Button';
import { NextIcon, PrevIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function NextPrev() {
    return (
        <div className={cx('wrapper')}>
            <Button className={cx('btn')}>
                <PrevIcon />
            </Button>
            <Button className={cx('btn')}>
                <NextIcon />
            </Button>
        </div>
    );
}

export default NextPrev;
